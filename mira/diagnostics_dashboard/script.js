const pages = {
            dashboard: `
                <div class="grid grid-cols-4 gap-4 mb-6">
                    <div class="card p-4">
                        <p class="text-xs text-slate-500 font-medium">Total Samples Today</p>
                        <h3 class="text-3xl font-bold mt-1">482</h3>
                        <p class="text-[10px] text-emerald-600 mt-1 font-bold"><i class="fa-solid fa-arrow-up"></i> 12% from yesterday</p>
                    </div>
                    <div class="card p-4">
                        <p class="text-xs text-slate-500 font-medium">Awaiting Verification</p>
                        <h3 class="text-3xl font-bold mt-1">24</h3>
                        <p class="text-[10px] text-amber-600 mt-1 font-bold">Avg TAT: 14 mins</p>
                    </div>
                    <div class="card p-4">
                        <p class="text-xs text-slate-500 font-medium">Critical Findings</p>
                        <h3 class="text-3xl font-bold mt-1 text-rose-600">07</h3>
                        <p class="text-[10px] text-rose-500 mt-1 font-bold">Immediate action required</p>
                    </div>
                    <div class="card p-4">
                        <p class="text-xs text-slate-500 font-medium">TAT Compliance</p>
                        <h3 class="text-3xl font-bold mt-1">98.2%</h3>
                        <p class="text-[10px] text-emerald-600 mt-1 font-bold">Target: 95%</p>
                    </div>
                </div>
                <div class="card">
                    <div class="p-4 border-b bg-slate-50/50 flex items-center gap-2">
                        <i class="fa-solid fa-list-check text-slate-400"></i>
                        <h4 class="font-bold text-sm">Recent Activity Queue</h4>
                    </div>
                    <div class="p-4 space-y-3">
                        <div class="p-3 border rounded-xl flex justify-between items-center hover:bg-slate-50">
                            <div><p class="font-bold text-sm text-slate-800">Room 302A - Priya Sharma</p><p class="text-xs text-slate-500">Hematology: CBC Complete</p></div>
                            <span class="status-badge bg-emerald-100 text-emerald-700">Verified</span>
                        </div>
                        <div class="p-3 border border-rose-100 bg-rose-50/30 rounded-xl flex justify-between items-center">
                            <div><p class="font-bold text-sm text-slate-800">Room 305B - Arjun Kumar</p><p class="text-xs text-slate-500">Cardiology: Troponin-I High</p></div>
                            <span class="status-badge bg-rose-600 text-white">Critical Alert</span>
                        </div>
                    </div>
                </div>
            `,
            pathology: `
                <div class="space-y-6">
                    <div class="card overflow-hidden">
                        <div class="p-4 border-b bg-slate-50/50 flex justify-between items-center">
                            <div>
                                <h4 class="font-bold text-slate-800">Hematology: Complete Blood Count (CBC)</h4>
                                <p class="text-xs text-slate-500">Patient: #PAT-4452 (Priya Sharma) | Sample: Whole Blood</p>
                            </div>
                            <span class="status-badge bg-emerald-100 text-emerald-700">Final Result</span>
                        </div>
                        <div class="p-6 grid grid-cols-4 gap-4">
                            <div class="p-4 bg-slate-50 rounded-xl text-center">
                                <p class="text-[10px] font-bold text-slate-400 uppercase">Hemoglobin</p>
                                <p class="text-2xl font-bold text-slate-800">14.2 <span class="text-xs font-normal text-slate-500">g/dL</span></p>
                                <p class="text-[8px] text-slate-400 mt-1">Range: 12.0 - 15.5</p>
                            </div>
                            <div class="p-4 bg-rose-50 border border-rose-100 rounded-xl text-center">
                                <p class="text-[10px] font-bold text-rose-400 uppercase">WBC Count</p>
                                <p class="text-2xl font-bold text-rose-600">12.5 <span class="text-xs font-normal text-rose-400">K/µL</span></p>
                                <p class="text-[8px] text-rose-400 mt-1">High: (4.5 - 11.0)</p>
                            </div>
                            <div class="p-4 bg-slate-50 rounded-xl text-center">
                                <p class="text-[10px] font-bold text-slate-400 uppercase">Platelets</p>
                                <p class="text-2xl font-bold text-slate-800">245 <span class="text-xs font-normal text-slate-500">K/µL</span></p>
                                <p class="text-[8px] text-slate-400 mt-1">Range: 150 - 450</p>
                            </div>
                            <div class="p-4 bg-slate-50 rounded-xl text-center">
                                <p class="text-[10px] font-bold text-slate-400 uppercase">Hematocrit</p>
                                <p class="text-2xl font-bold text-slate-800">42 <span class="text-xs font-normal text-slate-500">%</span></p>
                                <p class="text-[8px] text-slate-400 mt-1">Range: 37 - 48</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="p-4 border-b bg-slate-50/50"><h4 class="font-bold text-sm">Pending Chemistry Panels</h4></div>
                        <div class="p-4 space-y-3">
                            <div class="flex justify-between items-center p-3 border rounded-xl">
                                <div><p class="font-bold text-sm">Liver Function Test (LFT)</p><p class="text-xs text-slate-500">Patient: #PAT-881 | ID: #9912</p></div>
                                <p class="text-xs font-bold text-blue-600 italic">Processing (24m)</p>
                            </div>
                            <div class="flex justify-between items-center p-3 border rounded-xl">
                                <div><p class="font-bold text-sm">Basic Metabolic Panel (BMP)</p><p class="text-xs text-slate-500">Patient: #PAT-223 | ID: #9954</p></div>
                                <p class="text-xs font-bold text-blue-600 italic">Processing (18m)</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            radiology: `
                <div class="grid grid-cols-2 gap-6">
                    <div class="card overflow-hidden">
                        <div class="p-4 border-b bg-slate-50/50 flex justify-between items-center">
                            <h4 class="font-bold text-slate-800">Chest X-Ray (PA View)</h4>
                            <span class="status-badge bg-blue-600 text-white">Reviewing</span>
                        </div>
                        <div class="p-6">
                            <div class="aspect-video bg-slate-900 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                                <img src="https://www.e7health.com/files/blogs/chest-x-ray-29.jpg" alt="Description of image">
                                <div class="absolute bottom-2 left-2 text-[10px] text-white/50">Contrast: High | Zoom: 100%</div>
                            </div>
                            <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <p class="text-[10px] font-bold text-slate-400 uppercase mb-2">Radiologist Findings</p>
                                <p class="text-xs text-slate-700 leading-relaxed italic">"Lungs are clear. No evidence of focal consolidation, pleural effusion or pneumothorax. Cardiomediastinal silhouette is within normal limits. Osseous structures are intact."</p>
                            </div>
                            <div class="mt-4 flex gap-2">
                                <button class="flex-1 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold shadow-sm">Sign Report</button>
                                <button class="flex-1 py-2 border rounded-lg text-xs font-bold text-slate-600">Add Addendum</button>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <div class="card p-4 border-l-4 border-l-rose-500 bg-rose-50/20">
                            <div class="flex items-center gap-2 mb-2"><i class="fa-solid fa-triangle-exclamation text-rose-600"></i> <h5 class="text-sm font-bold text-rose-800 uppercase">Emergency STAT order</h5></div>
                            <p class="text-sm font-bold">PAT-2210: Stroke Protocol MRI</p>
                            <p class="text-[10px] text-slate-500">Location: ER Bay 2 | Priority: Level 1</p>
                            <button class="w-full mt-4 bg-rose-600 text-white py-2 rounded-lg text-xs font-bold">Assign Technician Now</button>
                        </div>
                        <div class="card p-4">
                            <h5 class="font-bold text-sm mb-4">Daily Imaging Queue</h5>
                            <div class="space-y-2">
                                <div class="flex justify-between p-2 bg-slate-50 rounded text-xs font-medium"><span>Ultrasound Abdomen</span> <span class="text-slate-400">10:30 AM</span></div>
                                <div class="flex justify-between p-2 bg-slate-50 rounded text-xs font-medium"><span>MRI Knee (Left)</span> <span class="text-slate-400">11:15 AM</span></div>
                                <div class="flex justify-between p-2 bg-slate-50 rounded text-xs font-medium"><span>CT Scan - Pelvis</span> <span class="text-slate-400">12:00 PM</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            lab: `
                <div class="card overflow-hidden">
                    <table class="w-full text-left text-sm">
                        <thead class="bg-slate-50 border-b text-[10px] font-bold uppercase text-slate-500">
                            <tr>
                                <th class="px-6 py-4">Test Name</th>
                                <th class="px-6 py-4">Patient ID</th>
                                <th class="px-6 py-4">Status</th>
                                <th class="px-6 py-4">TAT</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y">
                            <tr><td class="px-6 py-4 font-bold">Comprehensive Metabolic Panel</td><td class="px-6 py-4 text-slate-500">PAT-1022</td><td class="px-6 py-4"><span class="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded font-bold">IN PROGRESS</span></td><td class="px-6 py-4 text-xs font-medium text-slate-400 italic">12m left</td></tr>
                            <tr><td class="px-6 py-4 font-bold">Lipid Profile</td><td class="px-6 py-4 text-slate-500">PAT-1025</td><td class="px-6 py-4"><span class="bg-emerald-100 text-emerald-700 text-[10px] px-2 py-0.5 rounded font-bold">COMPLETED</span></td><td class="px-6 py-4 text-xs font-medium text-emerald-600">Done</td></tr>
                        </tbody>
                    </table>
                </div>
            `,
            reports: `
                <div class="grid grid-cols-2 gap-4">
                    <div class="card p-4 flex items-center gap-4">
                        <div class="w-10 h-10 bg-rose-50 text-rose-500 rounded-lg flex items-center justify-center"><i class="fa-solid fa-file-pdf text-xl"></i></div>
                        <div class="flex-1">
                            <h5 class="font-bold text-sm">MRI_Brain_Contrast.pdf</h5>
                            <p class="text-[10px] text-slate-400 font-medium uppercase">Radiology | PAT-102</p>
                        </div>
                        <button class="text-xs font-bold text-blue-600">View</button>
                    </div>
                </div>
            `,
            critical: `
                <div class="space-y-4">
                    <div class="card p-4 border-l-4 border-l-rose-600 bg-rose-50/20">
                        <div class="flex justify-between items-start">
                            <div>
                                <div class="flex items-center gap-2"><h5 class="font-bold text-rose-700 uppercase tracking-wide">Critical Level Alert</h5> <span class="bg-rose-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">Action Req</span></div>
                                <p class="text-lg font-bold mt-2 text-slate-900">Troponin-I: 2.8 ng/mL</p>
                                <p class="text-xs text-slate-500">Ref Range: 0.0 - 0.04 | Patient: Arjun Kumar</p>
                            </div>
                            <button class="bg-rose-600 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-sm">Notify MD</button>
                        </div>
                    </div>
                </div>
            `,
            equipment: `
                <div class="grid grid-cols-3 gap-6">
                    <div class="card p-5">
                        <div class="flex justify-between items-center mb-4"><h5 class="font-bold">Siemens MRI 3T</h5> <span class="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span></div>
                        <p class="text-xs text-slate-500">Status: Operational</p>
                        <div class="mt-4 bg-slate-50 h-2 rounded-full overflow-hidden"><div class="bg-emerald-500 h-full w-[95%]"></div></div>
                    </div>
                    <div class="card p-5">
                        <div class="flex justify-between items-center mb-4"><h5 class="font-bold">Roche Analyzer</h5> <span class="w-3 h-3 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span></div>
                        <p class="text-xs text-slate-500">Status: Calibration Needed</p>
                        <div class="mt-4 bg-slate-50 h-2 rounded-full overflow-hidden"><div class="bg-amber-500 h-full w-[40%]"></div></div>
                    </div>
                </div>
            `,
            ai: `
                <div class="card bg-blue-50/20 border-blue-100 p-6">
                    <div class="flex items-center gap-2 text-blue-600 mb-6 font-bold"><i class="fa-solid fa-wand-magic-sparkles"></i> AI Diagnostics Analysis</div>
                    <div class="bg-white p-4 border border-blue-100 rounded-xl mb-4">
                        <h5 class="text-sm font-bold">CXR AI Screening (CXR-992)</h5>
                        <p class="text-xs text-slate-600 mt-2">AI highlights 89% probability of <strong>Right Lower Lobe Pneumonia</strong>. High clinical correlation suggested.</p>
                        <button class="mt-4 bg-blue-600 text-white text-[10px] px-4 py-1.5 rounded font-bold">Review Findings</button>
                    </div>
                </div>
            `,
            settings: `<div class="card p-6"><h3 class="font-bold mb-4">System Settings</h3><p class="text-sm text-slate-500 italic">User profile and notification settings management...</p></div>`
        };

        function showPage(pageId) {
            const titles = {
                dashboard: 'Diagnostics Dashboard',
                pathology: 'Pathology Lab Results',
                radiology: 'Radiology Suite & Imaging',
                lab: 'Lab Test Management',
                reports: 'Clinical Reports',
                critical: 'Critical Findings Alert',
                equipment: 'Equipment Health Status',
                ai: 'AI Diagnostics Analysis',
                settings: 'System Settings'
            };
            document.getElementById('page-title').innerText = titles[pageId];
            document.getElementById('content-area').innerHTML = pages[pageId];
            document.querySelectorAll('.sidebar-link').forEach(link => link.classList.remove('active'));
            document.getElementById('link-' + pageId).classList.add('active');
        }

        showPage('dashboard');
