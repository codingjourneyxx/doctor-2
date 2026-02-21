'use client';

import { CheckVerified02, Clock, Users01, Play, Target04, MedicalSquare, Calculator, AlertTriangle, MessageChatCircle, Check } from '@untitledui/icons';

const trainingSteps = [
  { num: '01', title: 'Live Demonstration', desc: 'Faculty-led demonstration of techniques', icon: Play },
  { num: '02', title: 'Facial Marking Practice', desc: 'Participant-led marking exercises', icon: Target04 },
  { num: '03', title: 'Injection Practice', desc: 'Supervised hands-on injection training', icon: MedicalSquare },
  { num: '04', title: 'Dose Calculation', desc: 'Dilution exercise and dosing protocols', icon: Calculator },
  { num: '05', title: 'Complication Prevention', desc: 'Safety drills and emergency protocols', icon: AlertTriangle },
  { num: '06', title: 'Assessment & Counseling', desc: 'Post-procedure evaluation techniques', icon: MessageChatCircle },
];

const checklists = [
  {
    num: '01',
    title: 'Pre-Procedure Checklist',
    items: [
      'Patient assessment completed',
      'Informed consent signed',
      'Medical contraindications ruled out',
      'Pre-procedure photographs taken',
      'Correct toxin and dilution prepared',
    ],
  },
  {
    num: '02',
    title: 'Injection Checklist',
    items: [
      'Correct anatomical landmarks identified',
      'Appropriate dose calculated',
      'Proper needle size selected',
      'Injection depth confirmed',
      'Symmetry maintained',
    ],
  },
  {
    num: '03',
    title: 'Post-Procedure Checklist',
    items: [
      'Immediate complications ruled out',
      'Post-care instructions given',
      'Follow-up scheduled (10-14 days)',
      'Documentation completed',
    ],
  },
];

export function PracticalTraining() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-7xl border-x border-secondary">
        <div className="relative overflow-hidden bg-secondary px-4 sm:px-6 lg:px-8">
          {/* Decorative background */}
          <div className="absolute -left-[15%] -top-[50%] h-[300px] w-[300px] rounded-full opacity-20 blur-[80px] sm:h-[400px] sm:w-[400px] sm:blur-[100px] lg:h-[500px] lg:w-[500px] lg:blur-[120px]" style={{ background: 'radial-gradient(circle, var(--color-brand-500) 0%, transparent 70%)' }} />
          <div className="absolute -bottom-[40%] -right-[10%] h-[250px] w-[250px] rounded-full opacity-15 blur-[60px] sm:h-[300px] sm:w-[300px] sm:blur-[80px] lg:h-[400px] lg:w-[400px] lg:blur-[100px]" style={{ background: 'radial-gradient(circle, var(--color-brand-400) 0%, transparent 70%)' }} />
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

          {/* Header */}
          <div className="relative pt-6 sm:pt-8 lg:pt-16">
            <h2 className="mb-3 flex items-center gap-2 text-lg font-medium leading-tight sm:mb-4 sm:gap-3 sm:text-2xl lg:text-4xl">
              <CheckVerified02 className="size-5 shrink-0 text-brand-500 sm:size-7 lg:size-10" />
              <span>
                <span className="sm:hidden"><span className="bg-gradient-to-br from-purple-600 via-brand-500 to-purple-500 bg-clip-text text-transparent">Practical</span><br /><span className="font-bold text-primary">Training</span></span>
                <span className="hidden sm:inline"><span className="bg-gradient-to-br from-purple-600 via-brand-500 to-purple-500 bg-clip-text text-transparent">Hands-On</span> <span className="font-bold text-primary">Training Module</span></span>
              </span>
            </h2>
            <p className="max-w-2xl pb-3 text-xs leading-relaxed text-tertiary sm:pb-4 sm:text-sm lg:text-lg">
              Structured practical training with direct supervision
            </p>

            {/* Duration & Teaching Stats */}
            <div className="flex flex-wrap gap-2 pb-5 sm:gap-4 sm:pb-8 lg:pb-10">
              <div className="flex items-center gap-1.5 rounded-lg border border-secondary bg-primary px-2.5 py-1.5 sm:gap-2 sm:px-4 sm:py-2">
                <Clock className="size-3.5 text-brand-500 sm:size-4" />
                <span className="text-[10px] font-medium text-primary sm:text-sm">Duration: <span className="text-brand-600">3-4 hrs</span></span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg border border-secondary bg-primary px-2.5 py-1.5 sm:gap-2 sm:px-4 sm:py-2">
                <Users01 className="size-3.5 text-brand-500 sm:size-4" />
                <span className="text-[10px] font-medium text-primary sm:text-sm">Teaching: <span className="text-brand-600">1:1</span></span>
              </div>
            </div>
          </div>

          {/* Training Steps */}
          <div className="relative grid grid-cols-2 gap-2.5 pb-6 sm:gap-4 sm:pb-8 lg:grid-cols-3 lg:pb-12">
            {trainingSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="group cursor-pointer rounded-lg border border-secondary bg-primary p-3 transition-colors duration-200 hover:border-brand-500 hover:bg-brand-500 sm:rounded-xl sm:p-4">
                  <div className="mb-2 flex items-center gap-2 sm:mb-3 sm:gap-3">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-brand-50 transition-colors group-hover:bg-white/20 sm:size-8">
                      <Icon className="size-3 text-brand-600 transition-colors group-hover:text-white sm:size-4" />
                    </div>
                    <h3 className="text-xs font-medium text-primary transition-colors group-hover:text-white sm:text-sm lg:text-base">{step.title}</h3>
                  </div>
                  <p className="text-[10px] leading-relaxed text-tertiary transition-colors group-hover:text-white/90 sm:text-xs lg:text-sm">{step.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Checklists */}
          <div className="relative grid grid-cols-1 gap-3 pb-6 sm:grid-cols-2 sm:gap-4 sm:pb-8 lg:grid-cols-3 lg:pb-16">
            {checklists.map((checklist) => (
              <div key={checklist.num} className="rounded-lg border border-secondary bg-primary p-4 sm:rounded-xl sm:p-5">
                <div className="mb-3 flex items-center gap-2 border-b border-secondary pb-2.5 sm:mb-4 sm:gap-3 sm:pb-3">
                  <span className="flex size-6 items-center justify-center rounded-full bg-brand-500 text-[10px] font-bold text-white sm:size-8 sm:text-xs">{checklist.num}</span>
                  <h3 className="text-xs font-semibold text-primary sm:text-sm lg:text-base">{checklist.title}</h3>
                </div>
                <ul className="space-y-1.5 sm:space-y-2">
                  {checklist.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 sm:gap-2">
                      <div className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-50 sm:size-5">
                        <Check className="size-2.5 text-brand-600 sm:size-3" />
                      </div>
                      <span className="text-[10px] leading-relaxed text-tertiary sm:text-xs lg:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
