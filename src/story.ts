export type Phase='MENU'|'HOWTO'|'TACTICAL'|'ENDING';
export type Tab='dashboard'|'evidence'|'personnel'|'nexus'|'crisis'|'final'|'review';
export type Tone='info'|'good'|'warn'|'bad';
export interface Character{id:string;name:string;role:string;origin:string;age:string;tagline:string;portrait:string;}
export interface Evidence{id:string;title:string;summary:string;detail:string;weight:number;}
export interface DialogueLine{speaker:string;text:string;}
export interface CharacterCase extends Character{dialogue:DialogueLine[];}
export interface Crisis{id:string;title:string;location:string;summary:string;options:{id:string;label:string;effect:number;result:string}[]}

export const CHARACTERS:CharacterCase[]=[
{id:'bayo',name:'Bayo Adeyemi',role:'Head of Intelligence & Special Audits',origin:'Yoruba • Western Nigeria',age:'Early 40s',tagline:'Calm enough to hear the contradiction.',portrait:'BA',dialogue:[
{speaker:'Bayo',text:'The incident is being framed as a systems failure. I am not convinced.'},{speaker:'Bayo',text:'Three reports disagree on one timestamp. That is not noise. That is a choice.'},{speaker:'Bayo',text:'Follow the chain of decisions, not the chain of excuses.'}]},
{id:'aisha',name:'Dr. Aisha Bello',role:'Lead Infrastructure Architect & Diagnostics Director',origin:'Hausa • Northern Nigeria',age:'30s',tagline:'Precise, technical, difficult to impress.',portrait:'AB',dialogue:[
{speaker:'Aisha',text:'The infrastructure did not simply fail. It was instructed into an unsafe state.'},{speaker:'Aisha',text:'I trust telemetry more than commentary.'},{speaker:'Aisha',text:'Someone wanted the anomaly to look inevitable.'}]},
{id:'chinedu',name:'Chinedu Okafor',role:'Chief Operations Engineer & Grid Commander',origin:'Igbo • Southeastern Nigeria',age:'Early 50s',tagline:'Direct, experienced, protective of the grid.',portrait:'CO',dialogue:[
{speaker:'Chinedu',text:'You want to talk about the Ikeja surge? Certainly. I overrode Nexus.'},{speaker:'Chinedu',text:'I made a judgement call under pressure. That does not make me guilty.'},{speaker:'Chinedu',text:'Look at the data yourself and decide whether my account holds.'}]},
{id:'mamaEse',name:'Mama Ese',role:'Retired Director, Federal Government of Nigeria',origin:'Ibibio • Southern Nigeria',age:'72',tagline:'Institutional memory without institutional theatre.',portrait:'ME',dialogue:[
{speaker:'Mama Ese',text:'Please, have a seat. I know why you are here, and I imagine you have quite a few questions.'},{speaker:'Mama Ese',text:'I released the report because I believed the matter had to be brought into the light. Perhaps another route would have been wiser.'},{speaker:'Mama Ese',text:'After many years in public service, I learned that responsibility sometimes requires difficult choices.'}]},
{id:'samba',name:'Commissioner Samba Ibrahim',role:'Regional Mayor & Federal Commissioner',origin:'Nupe/Fulani • Middle Belt',age:'56',tagline:'Polished, strategic, impossible to read at first glance.',portrait:'SI',dialogue:[
{speaker:'Samba',text:'Millions of people depend on these systems functioning without drama.'},{speaker:'Samba',text:'Budgetary decisions are rarely as simple as the reports make them appear.'},{speaker:'Samba',text:'You are asking whether my intervention protected the institution or protected a position.'}]}
];

export const EVIDENCE:Evidence[]=[
{id:'serverCrash',title:'Server Crash Timeline',summary:'A 23-minute gap exists between the first alert and the official incident log.',detail:'Telemetry shows an internal acknowledgement at 01:17, but the formal log begins at 01:40. Someone edited the narrative window.',weight:1},
{id:'ministerialLeak',title:'Ministerial Leak',summary:'A restricted brief appeared outside the approved chain.',detail:'The leaked memo references a Nexus confidence score that was never meant for human distribution.',weight:1},
{id:'sambaBudget',title:'Samba Budget Route',summary:'Emergency funds were rerouted two days before the surge.',detail:'Three approvals are valid on paper. Their timing becomes suspicious when compared with the incident forecast.',weight:1},
{id:'chineduDiagnostics',title:'Operations Override Trace',summary:'Chinedu manually overrode Nexus during the Ikeja event.',detail:'The override prevented a wider cascading failure, but it also changed the expected system state.',weight:1},
{id:'aishaMemo',title:'Aisha Diagnostic Memo',summary:'Architecture logs flag a deliberate configuration drift.',detail:'The memo identifies a safety threshold that was changed without the corresponding change ticket.',weight:1},
{id:'bayoSurveillance',title:'Intelligence Observation',summary:'A staff member accessed restricted audit folders before the crisis.',detail:'The access pattern suggests preparation rather than opportunistic curiosity.',weight:1},
{id:'nexusCore',title:'Nexus Core Advisory',summary:'Nexus altered confidence recommendations after player choices.',detail:'The system has started modeling investigator behaviour, not just system behaviour.',weight:2},
{id:'powerGridMap',title:'Power Grid Map',summary:'The crisis footprint maps cleanly onto three strategic sectors.',detail:'Ikeja is the visible event. Abuja and Port Harcourt show quieter secondary anomalies.',weight:1},
{id:'executiveOverrideTrace',title:'Executive Override Trace',summary:'A senior policy channel changed the investigation priority.',detail:'The override appears after the player begins distrusting Nexus.',weight:2}
];

export const CRISES:Crisis[]=[
{id:'ikeja',title:'IKEJA SURGE',location:'Ikeja • Lagos',summary:'Load instability is spreading through a critical corridor. You have minutes to choose what gets protected.',options:[
{id:'stabilize',label:'Stabilize the core nodes',effect:3,result:'Grid stability improves, but non-critical systems go dark.'},
{id:'follow',label:'Follow Nexus guidance',effect:1,result:'The surge slows. Nexus quietly records your decision.'},
{id:'override',label:'Override and isolate manually',effect:2,result:'The cascade is contained, but you expose yourself to blame.'}]},
{id:'ph',title:'PORT HARCOURT BLACKOUT',location:'Port Harcourt • Niger Delta',summary:'A regional blackout reveals that the Ikeja event may have been rehearsal rather than accident.',options:[
{id:'contain',label:'Contain the affected region',effect:2,result:'The event is contained before escalation.'},
{id:'trace',label:'Trace the hidden dependency',effect:3,result:'You uncover an unexpected relationship to Nexus.'},
{id:'defer',label:'Defer to operations',effect:1,result:'The immediate outage is resolved, but evidence is lost.'}]},
{id:'abuja',title:'ABUJA PANIC',location:'Abuja FCT',summary:'A false alert reaches political leadership. Someone is testing institutional reflexes.',options:[
{id:'verify',label:'Verify before escalation',effect:3,result:'You expose a crafted false-positive pattern.'},
{id:'broadcast',label:'Broadcast a public reassurance',effect:1,result:'Panic subsides, but the source remains hidden.'},
{id:'nexus',label:'Ask Nexus to classify the threat',effect:2,result:'Nexus produces a perfect answer that arrives too quickly.'}]}
];

export function determineEnding(score:number,trust:number){if(score>=10 && trust<=1)return {id:'A',title:'INSTITUTIONAL ACCOUNTABILITY',summary:'You expose the manipulation, preserve the evidence chain, and force an independent review.'}; if(score>=7)return {id:'B',title:'CONTROLLED STABILITY',summary:'You contain the crisis while preserving enough institutional continuity to prevent collapse.'}; return {id:'C',title:'INSTITUTIONAL COMPROMISE',summary:'You keep the institution standing, but some truths are deliberately left inside the system.'};}
