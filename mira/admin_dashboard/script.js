const pages = {
            overview: `
                <div class="grid grid-cols-4 gap-6 mb-8">
                    <div class="card p-6 border-t-4 border-t-blue-500">
                        <p class="text-xs font-bold text-slate-400 uppercase">Total Revenue (Today)</p>
                        <h3 class="text-2xl font-bold mt-2">₹ 4,82,900</h3>
                        <p class="text-[10px] text-emerald-600 mt-2 font-bold">+5.2% vs yesterday</p>
                    </div>
                    <div class="card p-6 border-t-4 border-t-indigo-500">
                        <p class="text-xs font-bold text-slate-400 uppercase">Active Patients</p>
                        <h3 class="text-2xl font-bold mt-2">1,204</h3>
                        <p class="text-[10px] text-slate-500 mt-2 font-medium">Capacity at 84%</p>
                    </div>
                    <div class="card p-6 border-t-4 border-t-amber-500">
                        <p class="text-xs font-bold text-slate-400 uppercase">Pending Maintenance</p>
                        <h3 class="text-2xl font-bold mt-2 text-amber-600">12</h3>
                        <p class="text-[10px] text-slate-500 mt-2 font-medium">3 Critical OT Machines</p>
                    </div>
                    <div class="card p-6 border-t-4 border-t-rose-500">
                        <p class="text-xs font-bold text-slate-400 uppercase">Critical Alerts</p>
                        <h3 class="text-2xl font-bold mt-2 text-rose-600">03</h3>
                        <p class="text-[10px] text-rose-500 mt-2 font-bold">Action Required</p>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-2 card p-6">
                        <h4 class="font-bold text-sm mb-6">Patient Admission Trends</h4>
                        <div class="h-48 bg-slate-50 rounded-xl flex items-end justify-around p-4 gap-2">
                            <div class="w-full bg-blue-500 rounded-t" style="height: 40%"></div>
                            <div class="w-full bg-blue-500 rounded-t" style="height: 65%"></div>
                            <div class="w-full bg-blue-500 rounded-t" style="height: 85%"></div>
                            <div class="w-full bg-blue-600 rounded-t" style="height: 55%"></div>
                            <div class="w-full bg-blue-500 rounded-t" style="height: 95%"></div>
                        </div>
                    </div>
                    <div class="card p-6">
                        <h4 class="font-bold text-sm mb-4">Department Load</h4>
                        <div class="space-y-4">
                            <div><div class="flex justify-between text-xs mb-1"><span>Cardiology</span><span>92%</span></div><div class="h-2 bg-slate-100 rounded-full"><div class="h-full bg-blue-500" style="width: 92%"></div></div></div>
                            <div><div class="flex justify-between text-xs mb-1"><span>Neurology</span><span>64%</span></div><div class="h-2 bg-slate-100 rounded-full"><div class="h-full bg-emerald-500" style="width: 64%"></div></div></div>
                            <div><div class="flex justify-between text-xs mb-1"><span>General Surgery</span><span>78%</span></div><div class="h-2 bg-slate-100 rounded-full"><div class="h-full bg-amber-500" style="width: 78%"></div></div></div>
                        </div>
                    </div>
                </div>
            `,
            department: `
                <div class="grid grid-cols-3 gap-6">
                    <div class="card p-6 border-l-4 border-l-blue-600">
                        <h5 class="font-bold">Cardiology Department</h5>
                        <p class="text-xs text-slate-500 mt-2">HOD: Dr. Arvind Swami</p>
                        <div class="mt-4 pt-4 border-t grid grid-cols-2 gap-2 text-center">
                            <div><p class="text-[10px] font-bold text-slate-400">BEDS</p><p class="text-sm font-bold">45/50</p></div>
                            <div><p class="text-[10px] font-bold text-slate-400">STAFF</p><p class="text-sm font-bold">28</p></div>
                        </div>
                    </div>
                    <div class="card p-6 border-l-4 border-l-emerald-600">
                        <h5 class="font-bold">Orthopedics</h5>
                        <p class="text-xs text-slate-500 mt-2">HOD: Dr. Meera Nair</p>
                        <div class="mt-4 pt-4 border-t grid grid-cols-2 gap-2 text-center">
                            <div><p class="text-[10px] font-bold text-slate-400">BEDS</p><p class="text-sm font-bold">18/30</p></div>
                            <div><p class="text-[10px] font-bold text-slate-400">STAFF</p><p class="text-sm font-bold">14</p></div>
                        </div>
                    </div>
                    <div class="card p-6 border-l-4 border-l-rose-600">
                        <h5 class="font-bold">Emergency Care</h5>
                        <p class="text-xs text-slate-500 mt-2">HOD: Dr. Rajesh Koothrappali</p>
                        <div class="mt-4 pt-4 border-t grid grid-cols-2 gap-2 text-center">
                            <div><p class="text-[10px] font-bold text-slate-400">BEDS</p><p class="text-sm font-bold">12/12</p></div>
                            <div><p class="text-[10px] font-bold text-slate-400">STAFF</p><p class="text-sm font-bold">42</p></div>
                        </div>
                    </div>
                </div>
            `,
            operation: `
                <div class="space-y-6">
                    <div class="grid grid-cols-4 gap-4">
                        <div class="card p-4 bg-slate-900 text-white"><p class="text-xs opacity-60">Total OT Rooms</p><h4 class="text-2xl font-bold">08</h4></div>
                        <div class="card p-4 border-t-4 border-t-emerald-500"><p class="text-xs text-slate-500">Active Surgeries</p><h4 class="text-2xl font-bold">05</h4></div>
                        <div class="card p-4 border-t-4 border-t-amber-500"><p class="text-xs text-slate-500">Scheduled (Today)</p><h4 class="text-2xl font-bold">14</h4></div>
                        <div class="card p-4 border-t-4 border-t-rose-500"><p class="text-xs text-slate-500">Machine Maintenance</p><h4 class="text-2xl font-bold text-rose-600">02</h4></div>
                    </div>
                    <div class="card overflow-hidden">
                        <div class="p-4 bg-slate-50 border-b flex justify-between items-center"><h5 class="font-bold text-sm">OT Equipment & Repair Registry</h5><button class="bg-blue-600 text-white text-[10px] px-3 py-1.5 rounded font-bold">LOG REPAIR</button></div>
                        <table class="w-full text-left text-xs">
                            <thead class="bg-white border-b text-slate-400 font-bold uppercase text-[10px] tracking-wider">
                                <tr><th class="px-6 py-4">Asset ID</th><th class="px-6 py-4">Machine Name</th><th class="px-6 py-4">Health Status</th><th class="px-6 py-4">Last Service</th><th class="px-6 py-4">Repair Queue</th></tr>
                            </thead>
                            <tbody class="divide-y">
                                <tr><td class="px-6 py-4 font-mono">#OT-VN-102</td><td class="px-6 py-4 font-bold">Mindray V3 Ventilator</td><td class="px-6 py-4"><span class="status-pill bg-emerald-100 text-emerald-700">Operational</span></td><td class="px-6 py-4">12 Dec 2025</td><td class="px-6 py-4 text-slate-400">None</td></tr>
                                <tr><td class="px-6 py-4 font-mono">#OT-CA-405</td><td class="px-6 py-4 font-bold">C-Arm Imaging</td><td class="px-6 py-4"><span class="status-pill bg-rose-100 text-rose-700">FAULTY</span></td><td class="px-6 py-4">01 Oct 2025</td><td class="px-6 py-4 text-rose-600 font-bold">Circuit Repair</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `,
            reports: `
                <div class="grid grid-cols-2 gap-6">
                    <div class="card p-6"><h5 class="font-bold mb-4">Patient Satisfaction Score</h5><div class="flex items-center gap-4"><h2 class="text-4xl font-black text-blue-600">4.8</h2><p class="text-xs text-slate-500">Based on 1,200 discharge feedbacks.</p></div></div>
                    <div class="card p-6"><h5 class="font-bold mb-4">Mortality Rate (MTD)</h5><div class="flex items-center gap-4"><h2 class="text-4xl font-black text-emerald-600">0.04%</h2><p class="text-xs text-slate-500">Benchmark: 0.12%</p></div></div>
                </div>
            `,
            financial: `
                <div class="space-y-6">
                    <div class="card p-6 bg-blue-600 text-white">
                        <div class="flex justify-between items-center"><p class="text-sm font-medium opacity-80">Total Outstanding Receivables</p><i class="fa-solid fa-indian-rupee-sign text-2xl opacity-40"></i></div>
                        <h2 class="text-4xl font-bold mt-2">₹ 28,45,200</h2>
                        <div class="mt-6 flex gap-4"><button class="bg-white/20 px-4 py-2 rounded-lg text-xs font-bold">Download Tally Export</button><button class="bg-white text-blue-600 px-4 py-2 rounded-lg text-xs font-bold">Process Payouts</button></div>
                    </div>
                    <div class="card p-6">
                        <h5 class="font-bold mb-4">Recent Transactions</h5>
                        <div class="space-y-3">
                            <div class="flex justify-between p-3 border rounded-xl items-center"><p class="text-sm font-bold">Apollo Pharmacy Settlement</p><p class="font-bold text-rose-600">- ₹ 1,42,000</p></div>
                            <div class="flex justify-between p-3 border rounded-xl items-center"><p class="text-sm font-bold">IPD Billing #8822</p><p class="font-bold text-emerald-600">+ ₹ 85,000</p></div>
                        </div>
                    </div>
                </div>
            `,
            security: `
                <div class="card p-6">
                    <h5 class="font-bold mb-4">Login & Access Logs</h5>
                    <div class="space-y-4">
                        <div class="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                            <i class="fa-solid fa-user-shield text-blue-600"></i>
                            <div><p class="text-xs font-bold">Admin_Principal Logged In</p><p class="text-[10px] text-slate-500">IP: 192.168.1.104 | 12:45 PM</p></div>
                        </div>
                        <div class="flex items-center gap-4 p-3 border border-rose-100 bg-rose-50/20 rounded-lg">
                            <i class="fa-solid fa-circle-exclamation text-rose-600"></i>
                            <div><p class="text-xs font-bold text-rose-700">Failed Access Attempt</p><p class="text-[10px] text-rose-500">IP: 45.2.1.99 (External) | 11:20 AM</p></div>
                        </div>
                    </div>
                </div>
            `,
            database: `
                <div class="card p-6">
                    <h5 class="font-bold mb-4 text-slate-800">Server & DB Health</h5>
                    <div class="grid grid-cols-2 gap-8">
                        <div><p class="text-[10px] font-bold text-slate-400 uppercase mb-2">Storage Usage</p><div class="h-4 bg-slate-100 rounded-full overflow-hidden"><div class="h-full bg-blue-500" style="width: 72%"></div></div><p class="text-xs mt-2 text-slate-500">720GB of 1TB Used</p></div>
                        <div><p class="text-[10px] font-bold text-slate-400 uppercase mb-2">Query Performance</p><h2 class="text-2xl font-bold">0.02ms <span class="text-xs font-medium text-emerald-600">Optimal</span></h2></div>
                    </div>
                </div>
            `,
            backup: `
                <div class="card p-6">
                    <h5 class="font-bold mb-4">Backup Timeline</h5>
                    <div class="space-y-4">
                        <div class="flex items-center gap-4"><div class="w-2 h-2 rounded-full bg-emerald-500"></div><p class="text-xs font-medium">Daily Database Backup - <strong>Success</strong> <span class="text-slate-400">(02:00 AM)</span></p></div>
                        <div class="flex items-center gap-4"><div class="w-2 h-2 rounded-full bg-emerald-500"></div><p class="text-xs font-medium">Cloud Image Sync - <strong>Success</strong> <span class="text-slate-400">(03:30 AM)</span></p></div>
                    </div>
                </div>
            `,
            maintenance: `
                <div class="card p-6">
                    <h5 class="font-bold mb-6">Scheduled Infrastructure Maintenance</h5>
                    <div class="p-4 bg-amber-50 border border-amber-100 rounded-xl">
                        <h6 class="text-sm font-bold text-amber-800">Server Maintenance Downtime</h6>
                        <p class="text-xs text-amber-700 mt-1">Scheduled for Sunday, 28th Dec (01:00 AM - 04:00 AM). All non-emergency portals will be offline.</p>
                    </div>
                </div>
            `,
            help: `
                <div class="card p-6 max-w-lg">
                    <h5 class="font-bold mb-4">MedAdmin Support Desk</h5>
                    <input type="text" placeholder="Search documentation..." class="w-full p-2 border rounded-lg text-sm mb-4 bg-slate-50">
                    <div class="space-y-2">
                        <button class="w-full text-left p-3 text-xs border rounded-lg hover:bg-slate-50">How to process refunds?</button>
                        <button class="w-full text-left p-3 text-xs border rounded-lg hover:bg-slate-50">Resetting Staff Biometrics</button>
                    </div>
                </div>
            `,
        };

        function showPage(pageId) {
            const titles = {
                overview: 'System Overview', department: 'Department Analytics', operation: 'OT & Surgical Management',
                reports: 'Reports & Insights', financial: 'Financial Management', security: 'Security & Access Control',
                database: 'Database & Server Management', backup: 'Backup & Recovery Status',
                maintenance: 'Infrastructure Maintenance', help: 'Help & Documentation'
            };
            document.getElementById('page-title').innerText = titles[pageId];
            document.getElementById('content-area').innerHTML = pages[pageId];
            document.querySelectorAll('.sidebar-link').forEach(link => link.classList.remove('active'));
            document.getElementById('link-' + pageId).classList.add('active');
        }

        showPage('overview');
