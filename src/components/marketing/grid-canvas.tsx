"use client";

import { useEffect, useRef } from "react";

export function GridCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !canvas.parentElement) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const squareSize = 90;
        let width = 0;
        let height = 0;
        let columns = 0;
        let rows = 0;
        let animationId: number;

        // Each cell has a current opacity and a target opacity
        let cellOpacities: number[][] = [];
        let cellTargets: number[][] = [];

        let mouseCol = -1;
        let mouseRow = -1;

        const lerpSpeed = 0.05;
        const hoverOpacity = 0.08;
        const filledOpacity = 0.03;

        function initCells() {
            cellOpacities = [];
            cellTargets = [];
            for (let x = 0; x < columns; x++) {
                cellOpacities[x] = [];
                cellTargets[x] = [];
                for (let y = 0; y < rows; y++) {
                    const filled = Math.random() < 0.1;
                    cellOpacities[x][y] = filled ? filledOpacity : 0;
                    cellTargets[x][y] = filled ? filledOpacity : 0;
                }
            }
        }

        function shuffleTargets() {
            for (let x = 0; x < columns; x++) {
                for (let y = 0; y < rows; y++) {
                    const isHovered = x === mouseCol && y === mouseRow;
                    if (isHovered) {
                        cellTargets[x][y] = hoverOpacity;
                    } else {
                        cellTargets[x][y] = Math.random() < 0.1 ? filledOpacity : 0;
                    }
                }
            }
        }

        function draw() {
            if (!ctx) return;

            ctx.clearRect(0, 0, width, height);

            let needsUpdate = false;

            for (let x = 0; x < columns; x++) {
                for (let y = 0; y < rows; y++) {
                    // Lerp toward target
                    const diff = cellTargets[x][y] - cellOpacities[x][y];
                    if (Math.abs(diff) > 0.001) {
                        cellOpacities[x][y] += diff * lerpSpeed;
                        needsUpdate = true;
                    } else {
                        cellOpacities[x][y] = cellTargets[x][y];
                    }

                    if (cellOpacities[x][y] > 0.001) {
                        ctx.fillStyle = `rgba(147, 51, 234, ${cellOpacities[x][y]})`;
                        ctx.fillRect(x * squareSize, y * squareSize, squareSize, squareSize);
                    }

                    ctx.strokeStyle = "rgba(147, 51, 234, 0.06)";
                    ctx.strokeRect(x * squareSize, y * squareSize, squareSize, squareSize);
                }
            }

            if (needsUpdate) {
                animationId = requestAnimationFrame(draw);
            }
        }

        function startAnimation() {
            cancelAnimationFrame(animationId);
            animationId = requestAnimationFrame(draw);
        }

        function resize() {
            if (!canvas || !ctx || !canvas.parentElement) return;

            const pixelRatio = window.devicePixelRatio || 1;
            width = canvas.parentElement.offsetWidth;
            height = canvas.parentElement.offsetHeight;

            canvas.width = width * pixelRatio;
            canvas.height = height * pixelRatio;
            ctx.scale(pixelRatio, pixelRatio);
            canvas.style.width = width + "px";
            canvas.style.height = height + "px";

            columns = Math.ceil(width / squareSize);
            rows = Math.ceil(height / squareSize);

            initCells();
            startAnimation();
        }

        function onMouseMove(e: MouseEvent) {
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            const mx = e.clientX - rect.left;
            const my = e.clientY - rect.top;
            const col = Math.floor(mx / squareSize);
            const row = Math.floor(my / squareSize);

            if (col !== mouseCol || row !== mouseRow) {
                mouseCol = col;
                mouseRow = row;
                shuffleTargets();
                startAnimation();
            }
        }

        resize();

        window.addEventListener("resize", resize);
        document.addEventListener("mousemove", onMouseMove);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
            document.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none absolute inset-0 block h-full w-full"
        />
    );
}
