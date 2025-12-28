const pages = {
            dashboard: `
                <div class="grid grid-cols-4 gap-4 mb-6">
                    <div class="card p-4">
                        <p class="text-xs font-medium text-slate-500">My Patient Load</p>
                        <h3 class="text-3xl font-bold mt-1">8</h3>
                        <p class="text-[10px] text-slate-400 mt-1">Patients assigned to me</p>
                    </div>
                    <div class="card p-4">
                        <p class="text-xs font-medium text-slate-500">Care Tasks Today</p>
                        <h3 class="text-3xl font-bold mt-1">24</h3>
                        <p class="text-[10px] text-emerald-600 font-medium mt-1">18 completed, 6 pending</p>
                    </div>
                    <div class="card p-4">
                        <p class="text-xs font-medium text-slate-500">Medications Due</p>
                        <h3 class="text-3xl font-bold mt-1">4</h3>
                        <p class="text-[10px] text-rose-600 font-medium mt-1">Next dose in 15 minutes</p>
                    </div>
                    <div class="card p-4">
                        <p class="text-xs font-medium text-slate-500">Patient Alerts</p>
                        <h3 class="text-3xl font-bold mt-1">1</h3>
                        <p class="text-[10px] text-rose-600 font-medium mt-1">Requires immediate attention</p>
                    </div>
                </div>
                <div class="card">
                    <div class="p-4 border-b bg-slate-50/50 flex items-center gap-2">
                        <i class="fa-solid fa-user-group text-slate-400"></i>
                        <h4 class="font-bold text-sm">My Patient Assignments</h4>
                    </div>
                    <div class="p-4 space-y-3">
                        <div class="p-4 border border-emerald-100 bg-emerald-50/30 rounded-xl flex justify-between items-center">
                            <div>
                                <h5 class="font-bold text-slate-800">Room 302A - Priya Sharma</h5>
                                <p class="text-xs text-slate-500 mt-0.5">Post-op recovery - Day 2</p>
                                <p class="text-[10px] font-bold text-slate-900 mt-2">Next: Vital signs due in 30 mins</p>
                            </div>
                            <span class="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Stable</span>
                        </div>
                        <div class="p-4 border border-rose-100 bg-white rounded-xl flex justify-between items-center shadow-sm">
                            <div>
                                <div class="flex items-center gap-2">
                                    <h5 class="font-bold text-slate-800">Room 305B - Arjun Kumar</h5>
                                    <span class="bg-rose-600 text-white text-[10px] px-2 py-0.5 rounded-md"><i class="fa-solid fa-circle-exclamation"></i> Alert</span>
                                </div>
                                <p class="text-xs text-slate-500 mt-0.5">Diabetes monitoring</p>
                                <p class="text-[10px] font-bold text-slate-900 mt-2">Next: Blood glucose test overdue</p>
                            </div>
                            <button class="bg-rose-600 text-white text-[10px] font-bold px-4 py-2 rounded-lg">Check needed</button>
                        </div>
                    </div>
                </div>
            `,
            schedule: `
                <div class="grid grid-cols-3 gap-4 mb-6">
                    <div class="card p-4"><p class="text-xs text-slate-500">Current Shift</p><h3 class="text-xl font-bold">7:00 AM - 3:00 PM</h3></div>
                    <div class="card p-4"><p class="text-xs text-slate-500">Hours Completed</p><h3 class="text-xl font-bold">3.5 / 8 hours</h3><p class="text-[10px] text-emerald-600 font-bold">On track</p></div>
                    <div class="card p-4"><p class="text-xs text-slate-500">Next Break</p><h3 class="text-xl font-bold">12:00 PM</h3></div>
                </div>
                <div class="card p-6 space-y-6">
                    <div class="relative border-l-2 border-slate-100 ml-4 pl-8 space-y-8">
                        <div class="relative bg-emerald-50 p-4 border border-emerald-100 rounded-xl">
                            <div class="absolute -left-[41px] top-4 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white"></div>
                            <div class="flex justify-between font-bold text-sm mb-1">
                                <span>7:00 AM - Shift Handoff</span>
                                <span class="text-emerald-600 text-xs">Completed</span>
                            </div>
                            <p class="text-xs text-slate-500">Received report on 8 patients from night shift</p>
                        </div>
                        <div class="relative border border-blue-100 bg-blue-50/30 p-4 rounded-xl">
                            <div class="absolute -left-[41px] top-4 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
                            <div class="flex justify-between font-bold text-sm mb-1">
                                <span>10:30 AM - Morning Vitals Round</span>
                            </div>
                            <p class="text-xs text-slate-500 mb-3">Complete vital signs for all 8 assigned patients</p>
                            <div class="flex gap-2">
                                <span class="bg-blue-600 text-white text-[10px] px-2 py-1 rounded">Room 302A</span>
                                <span class="bg-blue-600 text-white text-[10px] px-2 py-1 rounded">Room 305B</span>
                                <button class="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-md ml-auto">Start Round</button>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            patients: `
                <div class="grid grid-cols-2 gap-6">
                    <div class="card overflow-hidden">
                        <div class="p-4 border-b flex justify-between items-start">
                            <div>
                                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1"><i class="fa-solid fa-location-dot"></i> Room 302A</p>
                                <h4 class="text-lg font-bold">Priya Sharma</h4>
                            </div>
                            <span class="bg-rose-600 text-white text-[10px] px-2 py-1 rounded font-bold uppercase"><i class="fa-solid fa-circle-exclamation"></i> Alert</span>
                        </div>
                        <div class="p-4 space-y-4">
                            <div class="grid grid-cols-2 text-xs gap-y-2">
                                <p><span class="text-slate-500">MRN:</span> MRN-001234</p>
                                <p><span class="text-slate-500">Age/Sex:</span> 54 / Female</p>
                                <p><span class="text-slate-500">Admission:</span> Dec 15, 2024</p>
                                <p><span class="text-slate-500">Attending:</span> Dr. Peterson</p>
                            </div>
                            <div class="bg-slate-50 p-3 rounded-lg"><p class="text-xs font-bold mb-1 uppercase text-slate-400">Diagnosis:</p><p class="text-sm font-semibold">Post-op Cholecystectomy - Day 2</p></div>
                            <div class="bg-amber-50 border border-amber-100 p-3 rounded-lg"><p class="text-xs font-bold text-amber-800"><i class="fa-solid fa-triangle-exclamation mr-1"></i> Pain score 7/10 - Pain management needed</p></div>
                            <div class="grid grid-cols-2 gap-3">
                                <div class="bg-slate-50 p-2 text-center rounded"><p class="text-[10px] text-slate-500 uppercase">BP</p><p class="font-bold">128/82</p></div>
                                <div class="bg-slate-50 p-2 text-center rounded"><p class="text-[10px] text-slate-500 uppercase">Temp</p><p class="font-bold">98.6°F</p></div>
                            </div>
                            <button class="w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-bold">View Full Chart</button>
                        </div>
                    </div>
                    </div>
            `,
            vitals: `
                <div class="grid grid-cols-3 gap-4 mb-6">
                    <div class="card p-4">
                        <p class="text-xs font-medium text-slate-500">Last Round Completed</p>
                        <h3 class="text-xl font-bold mt-1 text-slate-800">10:15 AM</h3>
                    </div>
                    <div class="card p-4 border-amber-100 bg-amber-50/20">
                        <p class="text-xs font-medium text-amber-700">Pending Rounds</p>
                        <h3 class="text-xl font-bold mt-1 text-amber-800">2 Patients</h3>
                    </div>
                    <div class="card p-4 border-rose-100">
                        <p class="text-xs font-medium text-rose-600">Abnormal Readings</p>
                        <h3 class="text-xl font-bold mt-1 text-rose-700">1 Critical</h3>
                    </div>
                </div>

                <div class="card mb-6">
                    <div class="p-4 border-b flex justify-between items-center">
                        <h4 class="font-bold text-sm">Critical Observations</h4>
                        <span class="text-[10px] text-slate-400">Updated: Just now</span>
                    </div>
                    <div class="p-4">
                        <div class="p-4 border border-rose-200 bg-rose-50 rounded-xl flex justify-between items-center">
                            <div class="flex items-start gap-4">
                                <div class="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">
                                    <i class="fa-solid fa-temperature-arrow-up"></i>
                                </div>
                                <div>
                                    <p class="text-xs font-bold text-rose-800">Arjun Kumar (305B)</p>
                                    <p class="text-sm font-semibold text-rose-700 mt-0.5">Blood Glucose: 248 mg/dL (High)</p>
                                    <p class="text-[10px] text-rose-600 mt-1">Previous: 180 mg/dL (2 hours ago)</p>
                                </div>
                            </div>
                            <button class="bg-rose-600 text-white text-[10px] font-bold px-4 py-2 rounded-lg shadow-sm">Notify MD</button>
                        </div>
                    </div>
                </div>

                <div class="card overflow-hidden">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-slate-50 border-b border-slate-200">
                                <th class="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase">Patient / Room</th>
                                <th class="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase">BP (mmHg)</th>
                                <th class="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase">Heart Rate</th>
                                <th class="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase">SpO2 (%)</th>
                                <th class="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase">Temp (°F)</th>
                                <th class="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase">Action</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100">
                            <tr>
                                <td class="px-6 py-4">
                                    <p class="text-sm font-bold">Priya Sharma</p>
                                    <p class="text-[10px] text-slate-400">Room 302A</p>
                                </td>
                                <td class="px-4 py-4 text-sm font-medium">128/82</td>
                                <td class="px-4 py-4 text-sm font-medium">76 bpm</td>
                                <td class="px-4 py-4 text-sm font-medium">98%</td>
                                <td class="px-4 py-4 text-sm font-medium">98.6°</td>
                                <td class="px-4 py-4">
                                    <button class="text-blue-600 text-xs font-bold hover:underline">Update</button>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4">
                                    <p class="text-sm font-bold">Arjun Kumar</p>
                                    <p class="text-[10px] text-slate-400">Room 305B</p>
                                </td>
                                <td class="px-4 py-4 text-sm font-medium">142/90</td>
                                <td class="px-4 py-4 text-sm font-medium">88 bpm</td>
                                <td class="px-4 py-4 text-sm font-medium">95%</td>
                                <td class="px-4 py-4 text-sm font-medium">99.1°</td>
                                <td class="px-4 py-4">
                                    <button class="text-blue-600 text-xs font-bold hover:underline">Update</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            tasks: `
                <div class="card p-4 space-y-3">
                    <div class="p-4 border border-amber-200 bg-amber-50/20 rounded-xl flex justify-between items-center">
                        <div class="flex gap-4">
                             <div class="w-1 h-12 bg-amber-400 rounded-full"></div>
                             <div>
                                <div class="flex items-center gap-2"><h5 class="font-bold">Priya Sharma</h5> <span class="text-[10px] border px-2 rounded">Room 302A</span> <span class="bg-emerald-100 text-emerald-700 text-[10px] px-2 font-bold uppercase">High</span></div>
                                <p class="text-sm font-medium mt-1">Wound dressing change</p>
                                <p class="text-xs text-slate-500 mt-0.5"><i class="fa-regular fa-clock"></i> Due: 11:00 AM</p>
                             </div>
                        </div>
                        <div class="flex gap-2">
                             <button class="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2"><i class="fa-solid fa-check-double"></i> Complete</button>
                             <button class="border text-xs font-bold px-4 py-2 rounded-lg">Details</button>
                        </div>
                    </div>
                </div>
            `,
            iv: `
                <div class="space-y-4">
                    <div class="card p-6">
                        <div class="flex justify-between mb-4">
                            <div><h4 class="text-lg font-bold">Priya Sharma</h4><p class="text-xs text-slate-500">Room 302A</p></div>
                            <span class="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded h-fit">running</span>
                        </div>
                        <div class="grid grid-cols-2 gap-y-6 text-sm mb-6">
                            <div><p class="text-xs text-slate-400 font-bold uppercase mb-1">IV Solution</p><p class="font-semibold">0.9% Normal Saline</p></div>
                            <div><p class="text-xs text-slate-400 font-bold uppercase mb-1">Infusion Rate</p><p class="font-semibold text-slate-900">100 mL/hr</p></div>
                            <div><p class="text-xs text-slate-400 font-bold uppercase mb-1">IV Site</p><p class="font-semibold">Right forearm</p></div>
                            <div><p class="text-xs text-slate-400 font-bold uppercase mb-1">Start Date</p><p class="font-semibold">12/15/2024</p></div>
                        </div>
                        <div class="bg-blue-50 border border-blue-100 p-3 rounded-lg text-sm font-bold text-blue-800 mb-6">Volume Remaining: 450 mL</div>
                        <div class="grid grid-cols-3 gap-3">
                            <button class="border py-2 rounded-lg text-xs font-bold hover:bg-slate-50">Check Site</button>
                            <button class="border py-2 rounded-lg text-xs font-bold hover:bg-slate-50">Document</button>
                            <button class="border py-2 rounded-lg text-xs font-bold hover:bg-slate-50">Change Bag</button>
                        </div>
                    </div>
                </div>
            `,
            ai: `
                <div class="card bg-rose-50 border-rose-200 overflow-hidden mb-6">
                    <div class="p-4 bg-white border-b border-rose-100 flex items-center gap-2 text-rose-600">
                        <i class="fa-solid fa-circle-exclamation"></i>
                        <h4 class="font-bold text-sm">High Priority AI Alerts</h4>
                    </div>
                    <div class="p-6">
                        <div class="bg-white border border-rose-100 rounded-xl p-6 shadow-sm">
                            <div class="flex justify-between items-start mb-4">
                                <div>
                                    <h5 class="text-lg font-bold">Arjun Kumar - Room 305B</h5>
                                    <p class="text-xs text-slate-500">MRN-005678 • Type 2 Diabetes</p>
                                </div>
                                <span class="bg-rose-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Urgent</span>
                            </div>
                            <div class="bg-rose-50 p-4 rounded-lg mb-4">
                                <p class="text-sm font-bold text-rose-800"><i class="fa-solid fa-triangle-exclamation mr-1"></i> Hyperglycemia Risk Alert</p>
                                <p class="text-xs text-rose-700 mt-1">Blood glucose elevated to 248 mg/dL. AI predicts continued rise based on current trend.</p>
                            </div>
                            <div class="space-y-2">
                                <p class="text-xs font-bold text-slate-400 uppercase tracking-wider"><i class="fa-solid fa-chart-line"></i> AI Recommendations:</p>
                                <ul class="text-xs space-y-2 pl-4 list-disc text-slate-700 font-medium">
                                    <li>Immediate blood glucose monitoring</li>
                                    <li>Consider insulin adjustment with physician</li>
                                    <li>Assess for diabetic ketoacidosis symptoms</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `
        };

        function showPage(pageId) {
            const titles = {
                dashboard: 'Dashboard',
                schedule: 'My Schedule',
                patients: 'My Patients',
                vitals: 'Vital Signs',
                tasks: 'Care Tasks',
                iv: 'IV Therapy',
                ai: 'AI Analysis'
            };

            // Update header info
            document.getElementById('page-title').innerText = titles[pageId];
            
            // Swap content
            document.getElementById('content-area').innerHTML = pages[pageId] || `<div class="p-8 text-center text-slate-400">Section coming soon...</div>`;

            // Active Link UI
            document.querySelectorAll('.sidebar-link').forEach(link => link.classList.remove('active'));
            document.getElementById('link-' + pageId).classList.add('active');
        }

        // Default load
        showPage('dashboard');