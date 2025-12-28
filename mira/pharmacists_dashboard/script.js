const pages = {
            dashboard: `
                <div class="grid grid-cols-4 gap-6 mb-8">
                    <div class="card p-6 border-b-4 border-b-blue-500">
                        <div class="flex justify-between items-start">
                            <p class="text-xs font-bold text-slate-400 uppercase">Active Prescriptions</p>
                            <i class="fa-solid fa-file-medical text-blue-500"></i>
                        </div>
                        <h3 class="text-3xl font-black mt-3">42</h3>
                        <p class="text-[10px] text-slate-400 mt-2">12 Pending Verification</p>
                    </div>
                    <div class="card p-6 border-b-4 border-b-emerald-500">
                        <div class="flex justify-between items-start">
                            <p class="text-xs font-bold text-slate-400 uppercase">Inventory Value</p>
                            <i class="fa-solid fa-indian-rupee-sign text-emerald-500"></i>
                        </div>
                        <h3 class="text-3xl font-black mt-3">₹ 18.5L</h3>
                        <p class="text-[10px] text-emerald-600 font-bold mt-2">+2.4% this week</p>
                    </div>
                    <div class="card p-6 border-b-4 border-b-rose-500">
                        <div class="flex justify-between items-start">
                            <p class="text-xs font-bold text-slate-400 uppercase">Pending Recalls</p>
                            <i class="fa-solid fa-biohazard text-rose-500"></i>
                        </div>
                        <h3 class="text-3xl font-black mt-3 text-rose-600">02</h3>
                        <p class="text-[10px] text-rose-400 font-bold mt-2">Batches flagged by HQ</p>
                    </div>
                    <div class="card p-6 border-b-4 border-b-amber-500">
                        <div class="flex justify-between items-start">
                            <p class="text-xs font-bold text-slate-400 uppercase">Refill Pending</p>
                            <i class="fa-solid fa-clock-rotate-left text-amber-500"></i>
                        </div>
                        <h3 class="text-3xl font-black mt-3">15</h3>
                        <p class="text-[10px] text-slate-400 mt-2">Due in next 24 hours</p>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-2 card p-6">
                        <h4 class="font-bold text-sm mb-6">Recent Activity Log</h4>
                        <div class="space-y-4">
                            <div class="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-xl transition-all">
                                <div class="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">AX</div>
                                <div class="flex-1"><p class="text-sm font-bold">Amoxicillin 500mg Dispensed</p><p class="text-[10px] text-slate-400 font-bold tracking-tighter uppercase">Patient: Rohan Sharma | #RX992</p></div>
                                <span class="text-[10px] font-bold text-slate-400">2 Mins ago</span>
                            </div>
                        </div>
                    </div>
                    <div class="card p-6">
                        <h4 class="font-bold text-sm mb-4">Stock Overview</h4>
                        <div class="h-48 flex items-end justify-between gap-2">
                            <div class="w-full bg-blue-500 rounded-t" style="height: 80%"></div>
                            <div class="w-full bg-blue-400 rounded-t" style="height: 60%"></div>
                            <div class="w-full bg-blue-300 rounded-t" style="height: 95%"></div>
                        </div>
                    </div>
                </div>
            `,
            inventory: `
                <div class="card">
                    <div class="p-4 border-b flex justify-between items-center bg-white">
                        <h5 class="font-bold text-sm">Centralized Stock Ledger</h5>
                        <button class="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg">+ Add Stock</button>
                    </div>
                    <table class="w-full text-left text-xs">
                        <thead class="bg-slate-50 text-[10px] font-black uppercase text-slate-400 border-b">
                            <tr><th class="px-6 py-4">Molecule Name</th><th class="px-6 py-4">Batch ID</th><th class="px-6 py-4">Stock</th><th class="px-6 py-4">Price</th><th class="px-6 py-4">Status</th></tr>
                        </thead>
                        <tbody class="divide-y">
                            <tr><td class="px-6 py-4 font-bold">Metformin 500mg</td><td class="px-6 py-4 font-mono">#MTF-202</td><td class="px-6 py-4 font-bold">1,200</td><td class="px-6 py-4">₹ 42.50</td><td class="px-6 py-4"><span class="status-pill bg-emerald-100 text-emerald-700">Optimal</span></td></tr>
                            <tr><td class="px-6 py-4 font-bold">Insulin Glargine</td><td class="px-6 py-4 font-mono">#INS-991</td><td class="px-6 py-4 font-bold text-rose-600">08</td><td class="px-6 py-4">₹ 850.00</td><td class="px-6 py-4"><span class="status-pill bg-rose-100 text-rose-700">Low Stock</span></td></tr>
                        </tbody>
                    </table>
                </div>
            `,
            verification: `
                <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-1 space-y-4">
                        <div class="card p-4 border-l-4 border-l-blue-600 bg-blue-50/30">
                            <h6 class="font-bold text-sm">RX #99281 - Arjun K.</h6>
                            <p class="text-[10px] text-slate-500">Dr. S. Mukherjee | Cardiology</p>
                        </div>
                    </div>
                    <div class="col-span-2 card p-8">
                        <h4 class="text-2xl font-black mb-6">Digital Prescription Audit</h4>
                        <div class="p-4 bg-slate-50 rounded-xl mb-6">
                            <p class="text-[10px] font-bold text-slate-400 uppercase">Medication Requested</p>
                            <p class="text-sm font-bold mt-1">Atorvastatin 20mg | 1-0-1 (30 Days)</p>
                        </div>
                        <button class="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl">Verify & Dispense</button>
                    </div>
                </div>
            `,
            counseling: `
                <div class="space-y-6">
                    <h4 class="font-black text-xl text-slate-800 mb-6">Patient Counseling Queue</h4>
                    
                    <div class="card p-6 hover:shadow-md transition-all">
                        <div class="flex justify-between mb-4">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center"><i class="fa-solid fa-user-doctor"></i></div>
                                <div>
                                    <h6 class="font-bold text-base">Seema Joshi</h6>
                                    <span class="bg-blue-100 text-blue-700 text-[10px] px-2.5 py-0.5 rounded-full font-bold">11:00 AM</span>
                                </div>
                            </div>
                            <div class="text-right">
                                <p class="text-xs text-slate-400 font-bold uppercase tracking-wider">Scheduled</p>
                                <p class="font-bold text-sm">11:00 AM</p>
                            </div>
                        </div>
                        <h5 class="font-bold text-lg mb-2">Insulin Glargine (Lantus)</h5>
                        <p class="text-xs text-slate-500 mb-5 font-medium uppercase tracking-wide">Session Type: New Medication Technique</p>
                        <div class="bg-blue-50/50 p-5 rounded-xl border border-blue-100 mb-6">
                            <p class="text-xs font-bold text-blue-800 mb-2 uppercase flex items-center gap-2"><i class="fa-solid fa-notes-medical"></i> Pharmacist Notes</p>
                            <p class="text-sm text-slate-700 leading-relaxed">First time insulin user. Needs demonstration of pen device, subcutaneous injection technique (abdomen/thigh rotation), and storage instructions (refrigerate vs. room temp once open).</p>
                        </div>
                        <div class="flex flex-wrap gap-3">
                            <button class="bg-blue-600 text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-blue-700 shadow-sm transition-all">Start Counseling Session</button>
                            <button class="bg-white border-2 border-slate-200 text-slate-600 text-sm font-bold px-6 py-3 rounded-xl hover:bg-slate-50 transition-all">Print Educational Materials</button>
                            <button class="bg-white border-2 border-slate-200 text-slate-600 text-sm font-bold px-6 py-3 rounded-xl hover:bg-slate-50 transition-all">Medication Guide (PDF)</button>
                        </div>
                    </div>

                    <div class="card p-6 hover:shadow-md transition-all">
                        <div class="flex justify-between mb-4">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center"><i class="fa-solid fa-user-doctor"></i></div>
                                <div>
                                    <h6 class="font-bold text-base">Vikram Malhotra</h6>
                                    <span class="bg-amber-100 text-amber-700 text-[10px] px-2.5 py-0.5 rounded-full font-bold">2:30 PM</span>
                                </div>
                            </div>
                            <div class="text-right">
                                <p class="text-xs text-slate-400 font-bold uppercase tracking-wider">Scheduled</p>
                                <p class="font-bold text-sm">2:30 PM</p>
                            </div>
                        </div>
                        <h5 class="font-bold text-lg mb-2">Warfarin (Coumadin)</h5>
                        <p class="text-xs text-slate-500 mb-5 font-medium uppercase tracking-wide">Session Type: INR Monitoring & Diet Review</p>
                        <div class="bg-amber-50/50 p-5 rounded-xl border border-amber-100 mb-6">
                            <p class="text-xs font-bold text-amber-800 mb-2 uppercase flex items-center gap-2"><i class="fa-solid fa-notes-medical"></i> Pharmacist Notes</p>
                            <p class="text-sm text-slate-700 leading-relaxed">Discuss importance of consistent Vitamin K intake. Review recent INR labs. Check for potential drug-herb interactions and signs of bleeding.</p>
                        </div>
                        <div class="flex flex-wrap gap-3">
                            <button class="bg-blue-600 text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-blue-700 shadow-sm transition-all">Start Counseling Session</button>
                            <button class="bg-white border-2 border-slate-200 text-slate-600 text-sm font-bold px-6 py-3 rounded-xl hover:bg-slate-50 transition-all">Print Dietary Guide</button>
                        </div>
                    </div>
                    
                    <div class="card p-6 hover:shadow-md transition-all">
                        <div class="flex justify-between mb-4">
                             <div class="flex items-center gap-3">
                                <div class="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center"><i class="fa-solid fa-user-doctor"></i></div>
                                <div>
                                    <h6 class="font-bold text-base">Ananya Reddy</h6>
                                    <span class="bg-emerald-100 text-emerald-700 text-[10px] px-2.5 py-0.5 rounded-full font-bold">4:15 PM</span>
                                </div>
                            </div>
                            <div class="text-right">
                                <p class="text-xs text-slate-400 font-bold uppercase tracking-wider">Scheduled</p>
                                <p class="font-bold text-sm">4:15 PM</p>
                            </div>
                        </div>
                        <h5 class="font-bold text-lg mb-2">Polypharmacy Review (5+ Meds)</h5>
                        <p class="text-xs text-slate-500 mb-5 font-medium uppercase tracking-wide">Session Type: Comprehensive Medication Review (CMR)</p>
                        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 mb-6">
                            <p class="text-xs font-bold text-slate-600 mb-2 uppercase flex items-center gap-2"><i class="fa-solid fa-notes-medical"></i> Pharmacist Notes</p>
                            <p class="text-sm text-slate-700 leading-relaxed">Annual review for elderly patient. Assess adherence to antihypertensives, statins, and diabetes meds. Look for prescribing cascades or deprescribing opportunities.</p>
                        </div>
                         <div class="flex flex-wrap gap-3">
                            <button class="bg-blue-600 text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-blue-700 shadow-sm transition-all">Start CMR Session</button>
                            <button class="bg-white border-2 border-slate-200 text-slate-600 text-sm font-bold px-6 py-3 rounded-xl hover:bg-slate-50 transition-all">View Med List</button>
                        </div>
                    </div>
                </div>
            `,
            refill: `
                <div class="card">
                    <div class="p-6 border-b flex justify-between items-center bg-white">
                        <div>
                            <h5 class="font-bold text-lg">Active Refill Requests</h5>
                            <p class="text-xs text-slate-400 mt-1">Manage recurring medication requests for chronic care patients.</p>
                        </div>
                        <div class="flex gap-2">
                            <button class="bg-blue-50 text-blue-600 text-[10px] font-bold px-3 py-2 rounded-lg">EXPORT LOGS</button>
                            <button class="bg-blue-600 text-white text-[10px] font-bold px-3 py-2 rounded-lg">BULK APPROVE</button>
                        </div>
                    </div>
                    <table class="w-full text-left text-xs">
                        <thead class="bg-slate-50 text-[10px] font-black uppercase text-slate-400 border-b">
                            <tr>
                                <th class="px-6 py-4">Patient Details</th>
                                <th class="px-6 py-4">Medication</th>
                                <th class="px-6 py-4">Last Fill Date</th>
                                <th class="px-6 py-4">Remaining</th>
                                <th class="px-6 py-4">Status</th>
                                <th class="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y">
                            <tr class="hover:bg-slate-50/80">
                                <td class="px-6 py-4">
                                    <p class="font-bold text-slate-800">Sanjay Singhania</p>
                                    <p class="text-[10px] text-slate-400 uppercase font-medium">UID: #PAT-8822</p>
                                </td>
                                <td class="px-6 py-4">
                                    <p class="font-bold">Telmisartan 40mg</p>
                                    <p class="text-[10px] text-slate-400 font-medium">Hyper-Tension Protocol</p>
                                </td>
                                <td class="px-6 py-4 font-medium text-slate-500">12 Nov 2025</td>
                                <td class="px-6 py-4"><span class="font-black text-blue-600">02</span>/05</td>
                                <td class="px-6 py-4">
                                    <span class="status-pill bg-amber-100 text-amber-700">Request Pending</span>
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <button class="bg-emerald-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-md shadow-sm">Process</button>
                                </td>
                            </tr>
                            <tr class="hover:bg-slate-50/80">
                                <td class="px-6 py-4">
                                    <p class="font-bold text-slate-800">Meera Iyer</p>
                                    <p class="text-[10px] text-slate-400 uppercase font-medium">UID: #PAT-1044</p>
                                </td>
                                <td class="px-6 py-4">
                                    <p class="font-bold">Gliclazide 80mg</p>
                                    <p class="text-[10px] text-slate-400 font-medium">Type-2 Diabetes</p>
                                </td>
                                <td class="px-6 py-4 font-medium text-slate-500">20 Oct 2025</td>
                                <td class="px-6 py-4"><span class="font-black text-rose-600">01</span>/06</td>
                                <td class="px-6 py-4">
                                    <span class="status-pill bg-rose-100 text-rose-700">Last Refill Alert</span>
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <button class="bg-emerald-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-md shadow-sm">Process</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            recall: `
                <div class="card p-6">
                    <h5 class="font-bold text-rose-700">Drug Recall Notifications</h5>
                    <div class="p-4 border border-rose-100 rounded-xl bg-rose-50/20 mt-4">
                        <h6 class="font-bold text-sm">Batch #RN-122: Ranitidine</h6>
                        <p class="text-xs text-rose-600 mt-1">Impurity Detected. Remove from active shelf immediately.</p>
                    </div>
                </div>
            `,
            // Immunization Removed Here
            reports: `
                <div class="space-y-6">
                    <div class="grid grid-cols-4 gap-6">
                         <div class="card p-6 flex flex-col justify-between">
                            <div class="flex justify-between items-start mb-4">
                                <p class="text-sm font-bold text-slate-500">Total Prescriptions</p>
                                <div class="bg-blue-50 p-2 rounded-lg text-blue-500"><i class="fa-solid fa-prescription"></i></div>
                            </div>
                            <div>
                                <h3 class="text-4xl font-black text-slate-800">1,247</h3>
                                <p class="text-xs text-emerald-600 font-bold mt-2 flex items-center gap-1"><i class="fa-solid fa-arrow-trend-up"></i> +12.5% from last month</p>
                            </div>
                         </div>
                         <div class="card p-6 flex flex-col justify-between">
                            <div class="flex justify-between items-start mb-4">
                                <p class="text-sm font-bold text-slate-500">Revenue</p>
                                <div class="bg-emerald-50 p-2 rounded-lg text-emerald-500"><i class="fa-solid fa-indian-rupee-sign"></i></div>
                            </div>
                            <div>
                                <h3 class="text-4xl font-black text-slate-800">₹8,45,230</h3>
                                <p class="text-xs text-emerald-600 font-bold mt-2 flex items-center gap-1"><i class="fa-solid fa-arrow-trend-up"></i> +8.2% from last month</p>
                            </div>
                         </div>
                         <div class="card p-6 flex flex-col justify-between">
                            <div class="flex justify-between items-start mb-4">
                                <p class="text-sm font-bold text-slate-500">Inventory Turnover</p>
                                <div class="bg-amber-50 p-2 rounded-lg text-amber-500"><i class="fa-solid fa-boxes-packing"></i></div>
                            </div>
                            <div>
                                <h3 class="text-4xl font-black text-slate-800">6.8x</h3>
                                <p class="text-xs text-emerald-600 font-bold mt-2 flex items-center gap-1"><i class="fa-solid fa-arrow-trend-up"></i> +0.3x from last month</p>
                            </div>
                         </div>
                         <div class="card p-6 flex flex-col justify-between">
                            <div class="flex justify-between items-start mb-4">
                                <p class="text-sm font-bold text-slate-500">Patient Counseling</p>
                                <div class="bg-blue-50 p-2 rounded-lg text-blue-500"><i class="fa-solid fa-user-group"></i></div>
                            </div>
                            <div>
                                <h3 class="text-4xl font-black text-slate-800">342</h3>
                                <p class="text-xs text-emerald-600 font-bold mt-2 flex items-center gap-1"><i class="fa-solid fa-arrow-trend-up"></i> +18% from last month</p>
                            </div>
                         </div>
                    </div>

                    <div class="card p-8">
                        <h5 class="text-xl font-bold mb-2 text-slate-800">Prescription Volume Trend</h5>
                        <p class="text-xs text-slate-500 mb-8 font-medium">Daily prescription dispensing over the last 30 days</p>

                        <div class="bar-chart-container pt-6 border-t border-dashed border-slate-200">
                            <div class="bar" style="height: 45%"></div>
                            <div class="bar" style="height: 50%"></div>
                            <div class="bar" style="height: 40%"></div>
                            <div class="bar" style="height: 60%"></div>
                            <div class="bar" style="height: 55%"></div>
                            <div class="bar" style="height: 70%"></div>
                            <div class="bar" style="height: 65%"></div>
                            <div class="bar" style="height: 75%"></div>
                            <div class="bar" style="height: 50%"></div>
                            <div class="bar" style="height: 60%"></div>
                            <div class="bar" style="height: 80%"></div>
                            <div class="bar" style="height: 70%"></div>
                            <div class="bar" style="height: 85%"></div>
                            <div class="bar" style="height: 90%"></div>
                            <div class="bar" style="height: 75%"></div>
                            <div class="bar" style="height: 65%"></div>
                            <div class="bar" style="height: 70%"></div>
                            <div class="bar" style="height: 80%"></div>
                            <div class="bar" style="height: 85%"></div>
                            <div class="bar" style="height: 95%"></div>
                            <div class="bar" style="height: 80%"></div>
                            <div class="bar" style="height: 75%"></div>
                            <div class="bar" style="height: 85%"></div>
                            <div class="bar" style="height: 90%"></div>
                            <div class="bar" style="height: 95%"></div>
                            <div class="bar bg-blue-700" style="height: 100%"></div>
                        </div>
                        <div class="flex justify-between text-xs text-slate-400 mt-4 font-bold uppercase tracking-wider">
                            <span>30 days ago</span>
                            <span>Today</span>
                        </div>
                    </div>
                </div>
            `,
            settings: `<div class="card p-6">Settings and Permissions.</div>`
        };

        function showPage(pageId) {
            const titles = {
                dashboard: 'Dashboard', inventory: 'Inventory Management', verification: 'Prescription Verification',
                counseling: 'Patient Counseling', refill: 'Refill Requests', recall: 'Drug Recall',
                reports: 'Reports & Analytics', settings: 'Settings'
            };
            const subtitles = {
                dashboard: 'Summary and Clinical Overview', inventory: 'Tracking Batches & Stock Levels', verification: 'Clinical Audit & Dispensing',
                counseling: 'Medication Adherence Sessions', refill: 'Manage Recurring Prescriptions', recall: 'Regulatory Compliance Alerts',
                reports: 'Performance & Financial Metrics', settings: 'Manage User Preferences'
            };
            
            document.getElementById('page-title').innerText = titles[pageId];
            document.getElementById('page-subtitle').innerText = subtitles[pageId];
            document.getElementById('content-area').innerHTML = pages[pageId];
            
            document.querySelectorAll('.sidebar-link').forEach(link => link.classList.remove('active'));
            document.getElementById('link-' + pageId).classList.add('active');
        }

        showPage('dashboard');