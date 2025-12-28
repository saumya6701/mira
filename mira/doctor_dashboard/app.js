// Templates for each section
        const pages = {
            dashboard: `
                <div class="grid grid-cols-4 gap-6 mb-8">
                    <div class="card p-5">
                        <p class="text-sm text-slate-500">Today's Appointments</p>
                        <h3 class="text-2xl font-bold">12</h3>
                        <p class="text-xs text-slate-400 mt-1">5 physical, 7 video</p>
                    </div>
                    <div class="card p-5 border-l-4 border-l-red-500">
                        <p class="text-sm text-slate-500">Pending Reviews</p>
                        <h3 class="text-2xl font-bold">8</h3>
                        <p class="text-xs text-red-500 mt-1">3 urgent</p>
                    </div>
                    <div class="card p-5">
                        <p class="text-sm text-slate-500">Active Patients</p>
                        <h3 class="text-2xl font-bold">156</h3>
                        <p class="text-xs text-emerald-500 mt-1">+12 this month</p>
                    </div>
                    <div class="card p-5">
                        <p class="text-sm text-slate-500">Clinical Notes</p>
                        <h3 class="text-2xl font-bold">4</h3>
                        <p class="text-xs text-slate-400 mt-1">Pending completion</p>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-8">
                    <div class="card p-6">
                        <div class="flex justify-between items-center mb-4">
                            <h4 class="font-bold flex items-center gap-2"><i class="fa-regular fa-calendar"></i> Today's Schedule</h4>
                        </div>
                        <div class="space-y-4">
                            <div class="flex items-center justify-between p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                                <div><p class="font-bold text-sm">Priya Sharma</p><p class="text-xs text-slate-500">Annual checkup</p></div>
                                <div class="text-right"><p class="font-bold text-sm">9:00 AM</p><p class="text-xs text-blue-500">Physical</p></div>
                            </div>
                            <div class="flex items-center justify-between p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                                <div><p class="font-bold text-sm">Arjun Kumar</p><p class="text-xs text-slate-500">Diabetes management</p></div>
                                <div class="text-right"><p class="font-bold text-sm">9:45 AM</p><p class="text-xs text-emerald-500">Video Call</p></div>
                            </div>
                        </div>
                    </div>
                    <div class="card p-6 border-l-4 border-l-orange-400">
                        <h4 class="font-bold mb-4">Patients Requiring Attention</h4>
                        <div class="space-y-3">
                            <div class="p-3 bg-red-50 border border-red-100 rounded-lg">
                                <div class="flex justify-between font-bold text-sm text-red-700"><span>Priya Sharma</span> <span class="bg-red-500 text-white px-2 py-0.5 rounded text-[10px]">Alert</span></div>
                                <p class="text-xs mt-1">Hypertension Stage 2 | BP: 145/92</p>
                            </div>
                            <div class="p-3 bg-orange-50 border border-orange-100 rounded-lg">
                                <div class="flex justify-between font-bold text-sm text-orange-700"><span>Ananya Reddy</span> <span class="bg-red-500 text-white px-2 py-0.5 rounded text-[10px]">Alert</span></div>
                                <p class="text-xs mt-1">Hyperlipidemia | LDL: 160</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            schedule: `
                <div class="space-y-4">
                    <div class="card p-6 flex justify-between items-center">
                        <div class="flex gap-6">
                            <div class="text-center w-16">
                                <span class="text-2xl font-bold">9:00</span><br><span class="text-xs text-slate-500 uppercase tracking-wider">AM</span>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold">Priya Sharma <span class="ml-2 text-xs font-normal bg-blue-100 text-blue-700 px-2 py-1 rounded">In-Person</span></h3>
                                <p class="text-sm text-slate-500 mt-1">Age: 45 years • MRN: MRN-1234</p>
                                <p class="text-sm font-medium mt-2"><i class="fa-solid fa-notes-medical mr-1"></i> Annual Physical Examination</p>
                            </div>
                        </div>
                        <div class="flex gap-2">
                             <button class="px-4 py-2 border rounded-lg text-sm font-medium hover:bg-slate-50">Room 305-B</button>
                             <button class="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50">View Patient Chart</button>
                        </div>
                    </div>
                    <div class="card p-6 flex justify-between items-center">
                        <div class="flex gap-6">
                            <div class="text-center w-16">
                                <span class="text-2xl font-bold">9:45</span><br><span class="text-xs text-slate-500 uppercase tracking-wider">AM</span>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold">Arjun Kumar <span class="ml-2 text-xs font-normal bg-emerald-100 text-emerald-700 px-2 py-1 rounded">Video Consult</span></h3>
                                <p class="text-sm text-slate-500 mt-1">Age: 52 years • MRN: MRN-1235</p>
                                <p class="text-sm font-medium mt-2"><i class="fa-solid fa-notes-medical mr-1"></i> Follow-up - Diabetes Management</p>
                            </div>
                        </div>
                        <div class="flex gap-2">
                             <button class="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-2"><i class="fa-solid fa-video"></i> Join Video Call</button>
                             <button class="px-4 py-2 border rounded-lg text-sm font-medium hover:bg-slate-50">View Patient Chart</button>
                        </div>
                    </div>
                </div>
            `,
            patients: `
                <div class="space-y-6">
                    <div class="card p-6">
                        <div class="flex justify-between mb-6">
                            <div>
                                <h3 class="text-lg font-bold">Priya Sharma <span class="ml-2 text-[10px] bg-red-500 text-white px-2 py-0.5 rounded uppercase">Alert</span></h3>
                                <p class="text-sm text-slate-500">MRN-1234 | 45yo Female | DOB: 05/12/1978 | Blood: O+</p>
                            </div>
                            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium h-fit">Open Full Chart</button>
                        </div>
                        <div class="grid grid-cols-3 gap-8">
                            <div>
                                <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Primary Diagnosis</h4>
                                <p class="text-sm font-semibold">Hypertension Stage 2, Type 2 Diabetes</p>
                                <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 mt-4">Current Medications</h4>
                                <p class="text-sm font-semibold">Metformin 500mg BID, Lisinopril 10mg QD</p>
                            </div>
                            <div>
                                <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Recent Vitals</h4>
                                <div class="grid grid-cols-2 gap-2 text-sm">
                                    <p><span class="text-slate-500">BP:</span> 145/92</p>
                                    <p><span class="text-slate-500">HR:</span> 78</p>
                                    <p><span class="text-slate-500">Temp:</span> 98.6°F</p>
                                    <p><span class="text-slate-500">Wt:</span> 165 lbs</p>
                                </div>
                            </div>
                            <div class="bg-red-50 p-4 rounded-lg">
                                <p class="text-red-700 text-sm font-bold"><i class="fa-solid fa-circle-exclamation mr-2"></i>Elevated BP - Follow-up needed</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            lab: `
                <div class="card overflow-hidden">
                    <div class="bg-slate-50 p-4 border-b flex justify-between items-center">
                        <div>
                            <h3 class="font-bold">Complete Blood Count (CBC) <span class="ml-2 text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded">COMPLETED</span></h3>
                            <p class="text-xs text-slate-500">Patient: Priya Sharma | Completed: Jan 11, 2024</p>
                        </div>
                        <button class="px-3 py-1.5 border rounded text-xs font-semibold hover:bg-white shadow-sm">Download PDF</button>
                    </div>
                    <table class="w-full text-left text-sm">
                        <thead class="bg-slate-50 border-b text-slate-500 uppercase text-[10px] font-bold">
                            <tr>
                                <th class="px-6 py-3">Parameter</th>
                                <th class="px-6 py-3">Value</th>
                                <th class="px-6 py-3">Unit</th>
                                <th class="px-6 py-3">Reference Range</th>
                                <th class="px-6 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y">
                            <tr><td class="px-6 py-4 font-semibold">WBC</td><td class="px-6 py-4 font-bold">7.2</td><td class="px-6 py-4">K/uL</td><td class="px-6 py-4">4.5-11.0</td><td class="px-6 py-4"><span class="border px-2 py-0.5 rounded text-[10px]">Normal</span></td></tr>
                            <tr><td class="px-6 py-4 font-semibold">RBC</td><td class="px-6 py-4 font-bold">4.5</td><td class="px-6 py-4">M/uL</td><td class="px-6 py-4">4.2-5.4</td><td class="px-6 py-4"><span class="border px-2 py-0.5 rounded text-[10px]">Normal</span></td></tr>
                            <tr><td class="px-6 py-4 font-semibold">Hemoglobin</td><td class="px-6 py-4 font-bold">13.8</td><td class="px-6 py-4">g/dL</td><td class="px-6 py-4">12.0-16.0</td><td class="px-6 py-4"><span class="border px-2 py-0.5 rounded text-[10px]">Normal</span></td></tr>
                        </tbody>
                    </table>
                </div>
            `,
            imaging: `
                <div class="space-y-6">
                    <div class="card p-6 border-l-4 border-l-red-500">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-lg font-bold">Chest X-Ray (PA and Lateral) <span class="ml-2 text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded uppercase">Pending Review</span> <span class="ml-1 text-[10px] bg-red-500 text-white px-2 py-0.5 rounded uppercase">Urgent</span></h3>
                                <p class="text-sm text-slate-500 mt-1">Patient: Ananya Reddy | Performed: Jan 13, 2024</p>
                            </div>
                            <button class="px-3 py-1.5 border rounded text-xs font-semibold hover:bg-slate-50">View Images</button>
                        </div>
                        <div class="bg-slate-50 p-4 rounded-lg">
                            <p class="text-xs font-bold text-slate-400 uppercase tracking-wider">Clinical Indication</p>
                            <p class="text-sm mt-1 font-medium">Chest pain evaluation, R/O pneumonia</p>
                        </div>
                    </div>
                </div>
            `,
            referrals: `
                <div class="space-y-6">
                    <div class="card p-6">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-lg font-bold">Endocrinology Consultation <span class="ml-2 text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded uppercase font-bold">Scheduled</span></h3>
                                <p class="text-sm text-slate-500 mt-1">Patient: Priya Sharma | Appointment: Jan 25, 2024</p>
                            </div>
                            <button class="px-3 py-1.5 border rounded text-xs font-semibold">View Details</button>
                        </div>
                        <div class="bg-slate-50 p-4 rounded-lg space-y-4">
                            <div>
                                <p class="text-xs font-bold text-slate-400 uppercase tracking-wider">Reason for Referral</p>
                                <p class="text-sm font-medium">Diabetes management optimization - A1C trending upward</p>
                            </div>
                            <div>
                                <p class="text-xs font-bold text-slate-400 uppercase tracking-wider">Clinical Information</p>
                                <p class="text-sm">45yo F with T2DM. A1C increased from 6.8% to 7.5% over 6 months. Currently on Metformin 1000mg BID.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        };

        function showPage(pageId) {
            // Update Title
            const titles = {
                dashboard: 'Dashboard',
                schedule: 'My Schedule',
                patients: 'Patient Records',
                lab: 'Lab Results',
                imaging: 'Imaging & Scans',
                referrals: 'Referrals'
            };
            document.getElementById('page-title').innerText = titles[pageId];

            // Update Content
            document.getElementById('content-area').innerHTML = pages[pageId];

            // Update Sidebar Active State
            document.querySelectorAll('.sidebar-link').forEach(link => {
                link.classList.remove('active');
            });
            document.getElementById('link-' + pageId).classList.add('active');
        }

        // Initialize with Dashboard
        showPage('dashboard');