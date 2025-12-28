 // Page Content Data Templates
        const pages = {
            dashboard: `
                <div class="grid grid-cols-4 gap-6 mb-8">
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-medium text-slate-500 mb-2">Today's Appointments</h3>
                        <div class="flex items-baseline gap-2">
                            <span class="text-3xl font-bold text-slate-800">32</span>
                            <span class="text-sm text-slate-500">8 checked in</span>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-medium text-slate-500 mb-2">Waiting Room</h3>
                        <div class="flex items-baseline gap-2">
                            <span class="text-3xl font-bold text-slate-800">5</span>
                            <span class="text-sm text-slate-500">Avg: 18 mins</span>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-medium text-slate-500 mb-2">Pending Calls</h3>
                        <div class="flex items-baseline gap-2">
                            <span class="text-3xl font-bold text-slate-800">12</span>
                            <span class="text-sm text-slate-500">Confirmations</span>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-medium text-slate-500 mb-2">New Patients</h3>
                        <div class="flex items-baseline gap-2">
                            <span class="text-3xl font-bold text-slate-800">4</span>
                            <span class="text-sm text-slate-500">Registered today</span>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-8">
                    <div class="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col">
                        <div class="p-5 border-b border-slate-100">
                            <h2 class="text-lg font-bold text-slate-800 flex items-center gap-2">
                                <i class="fa-regular fa-clock text-slate-400"></i> Waiting Room
                            </h2>
                            <p class="text-sm text-slate-500 mt-1">Patients currently waiting</p>
                        </div>
                        <div class="p-5 flex-1 flex flex-col gap-4">
                            <div class="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100">
                                <div>
                                    <h4 class="text-sm font-bold text-slate-800">Ananya Reddy</h4>
                                    <p class="text-xs text-slate-500 mt-1">Waiting for: Dr. Krishnan</p>
                                    <p class="text-xs text-slate-500 mt-0.5"><i class="fa-regular fa-clock text-xs mr-1"></i> Checked in: 9:55 AM · Wait time: 15 mins</p>
                                </div>
                                <div class="flex gap-2">
                                    <span class="bg-green-50 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">waiting</span>
                                    <button class="text-xs font-medium text-slate-600 hover:bg-white px-3 py-1 rounded-md border border-transparent hover:border-slate-200 transition-all">Notify</button>
                                </div>
                            </div>
                            <div class="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100">
                                <div>
                                    <h4 class="text-sm font-bold text-slate-800">Priya Sharma</h4>
                                    <p class="text-xs text-slate-500 mt-1">Waiting for: Dr. Deshmukh</p>
                                    <p class="text-xs text-slate-500 mt-0.5"><i class="fa-regular fa-clock text-xs mr-1"></i> Checked in: 8:50 AM · Wait time: 25 mins</p>
                                </div>
                                <div class="flex gap-2">
                                    <span class="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">ready</span>
                                    <button class="text-xs font-medium text-slate-600 hover:bg-white px-3 py-1 rounded-md border border-transparent hover:border-slate-200 transition-all">Notify</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col">
                        <div class="p-5 border-b border-slate-100">
                            <h2 class="text-lg font-bold text-slate-800 flex items-center gap-2">
                                <i class="fa-regular fa-calendar text-slate-400"></i> Today's Schedule
                            </h2>
                            <p class="text-sm text-slate-500 mt-1">Upcoming appointments</p>
                        </div>
                        <div class="p-5 flex-1 flex flex-col gap-4 overflow-y-auto" style="max-height: 400px;">
                            <div class="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors">
                                <div class="flex gap-4 items-center">
                                    <div class="text-right w-16 shrink-0">
                                        <p class="text-sm font-bold text-slate-800">9:00 AM</p>
                                    </div>
                                    <div>
                                        <h4 class="text-sm font-bold text-slate-800">Priya Sharma</h4>
                                        <p class="text-xs text-slate-500">Dr. Deshmukh · Follow-up</p>
                                    </div>
                                </div>
                                <span class="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">checked-in</span>
                            </div>
                            <div class="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors">
                                <div class="flex gap-4 items-center">
                                    <div class="text-right w-16 shrink-0">
                                        <p class="text-sm font-bold text-slate-800">9:30 AM</p>
                                    </div>
                                    <div>
                                        <h4 class="text-sm font-bold text-slate-800">Arjun Kumar</h4>
                                        <p class="text-xs text-slate-500">Dr. Iyer · New Patient</p>
                                    </div>
                                </div>
                                <span class="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">confirmed</span>
                            </div>
                            <div class="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors">
                                <div class="flex gap-4 items-center">
                                    <div class="text-right w-16 shrink-0">
                                        <p class="text-sm font-bold text-slate-800">10:00 AM</p>
                                    </div>
                                    <div>
                                        <h4 class="text-sm font-bold text-slate-800">Ananya Reddy</h4>
                                        <p class="text-xs text-slate-500">Dr. Krishnan · Annual Checkup</p>
                                    </div>
                                </div>
                                <span class="bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full">waiting</span>
                            </div>
                            <div class="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors">
                                <div class="flex gap-4 items-center">
                                    <div class="text-right w-16 shrink-0">
                                        <p class="text-sm font-bold text-slate-800">10:30 AM</p>
                                    </div>
                                    <div>
                                        <h4 class="text-sm font-bold text-slate-800">Rahul Verma</h4>
                                        <p class="text-xs text-slate-500">Dr. Deshmukh · Consultation</p>
                                    </div>
                                </div>
                                <span class="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">confirmed</span>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            schedule: `
                <div class="flex justify-between items-center mb-6">
                     <div class="relative w-96">
                        <input type="text" placeholder="Search appointments..." class="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500">
                        <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-3 text-slate-400"></i>
                    </div>
                    <div class="flex gap-3">
                         <button class="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all">
                            <i class="fa-solid fa-filter"></i> Filter
                        </button>
                        <button class="flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all shadow-sm">
                            <i class="fa-solid fa-plus"></i> New Appointment
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-4 gap-6 mb-8">
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-medium text-slate-500 mb-2">Today</h3>
                        <div class="flex items-baseline gap-2">
                            <span class="text-3xl font-bold text-slate-800">32</span>
                            <span class="text-sm text-slate-500">Scheduled appointments</span>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-medium text-slate-500 mb-2">This Week</h3>
                        <div class="flex items-baseline gap-2">
                            <span class="text-3xl font-bold text-slate-800">187</span>
                            <span class="text-sm text-green-600 font-medium">↑ 12% from last week</span>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-medium text-slate-500 mb-2">Confirmed</h3>
                        <div class="flex items-baseline gap-2">
                            <span class="text-3xl font-bold text-slate-800">156</span>
                            <span class="text-sm text-slate-500">83% confirmation rate</span>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-medium text-slate-500 mb-2">Pending</h3>
                        <div class="flex items-baseline gap-2">
                            <span class="text-3xl font-bold text-slate-800">31</span>
                            <span class="text-sm text-yellow-600 font-medium">Needs confirmation</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                    <h2 class="text-lg font-bold text-slate-800 mb-6">Weekly Schedule Overview</h2>
                    <div class="flex gap-6 overflow-x-auto pb-4">
                        <div class="flex-1 min-w-[250px] bg-slate-50 rounded-xl border-t-4 border-blue-500 p-4">
                            <h3 class="font-bold text-slate-800 mb-1">Monday</h3>
                            <p class="text-xs text-slate-500 mb-4">Dec 16, 2024</p>
                            <div class="space-y-3">
                                <div class="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex items-center gap-3">
                                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <div><span class="block text-sm font-bold text-slate-800">18</span><span class="text-xs text-slate-500">Physical</span></div>
                                </div>
                                <div class="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex items-center gap-3">
                                    <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <div><span class="block text-sm font-bold text-slate-800">10</span><span class="text-xs text-slate-500">Video</span></div>
                                </div>
                            </div>
                             <div class="flex justify-between items-center mt-4 pt-4 border-t border-slate-200">
                                <span class="text-sm font-bold text-slate-800">28 appointments</span>
                            </div>
                        </div>
                         <div class="flex-1 min-w-[250px] bg-slate-50 rounded-xl border-t-4 border-green-500 p-4">
                            <h3 class="font-bold text-slate-800 mb-1">Tuesday</h3>
                            <p class="text-xs text-slate-500 mb-4">Dec 17, 2024</p>
                            <div class="space-y-3">
                                <div class="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex items-center gap-3">
                                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <div><span class="block text-sm font-bold text-slate-800">22</span><span class="text-xs text-slate-500">Physical</span></div>
                                </div>
                                <div class="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex items-center gap-3">
                                    <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <div><span class="block text-sm font-bold text-slate-800">10</span><span class="text-xs text-slate-500">Video</span></div>
                                </div>
                            </div>
                             <div class="flex justify-between items-center mt-4 pt-4 border-t border-slate-200">
                                <span class="text-sm font-bold text-slate-800">32 appointments</span>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            waiting: `
                 <div class="grid grid-cols-4 gap-6 mb-8">
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-medium text-slate-500 mb-2">In Waiting Room</h3>
                        <div class="flex items-baseline gap-2">
                            <span class="text-3xl font-bold text-slate-800">5</span>
                            <span class="text-sm text-slate-500">Patients waiting</span>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-medium text-slate-500 mb-2">Avg Wait Time</h3>
                        <div class="flex items-baseline gap-2">
                            <span class="text-3xl font-bold text-slate-800">18</span>
                            <span class="text-sm text-green-600 font-medium">↓ 5 min</span>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-medium text-slate-500 mb-2">With Doctor</h3>
                        <div class="flex items-baseline gap-2">
                            <span class="text-3xl font-bold text-slate-800">8</span>
                            <span class="text-sm text-slate-500">In consultation</span>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-medium text-slate-500 mb-2">Completed Today</h3>
                        <div class="flex items-baseline gap-2">
                            <span class="text-3xl font-bold text-slate-800">24</span>
                            <span class="text-sm text-slate-500">Appointments done</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                    <h2 class="text-lg font-bold text-slate-800 mb-6">Current Waiting Room</h2>
                    <div class="space-y-4">
                        <div class="flex items-center justify-between p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                            <div class="flex gap-6">
                                <div>
                                    <h4 class="text-base font-bold text-slate-800 flex items-center gap-3 mb-2">
                                        Ananya Reddy <span class="bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-full">waiting</span>
                                    </h4>
                                    <p class="text-xs text-slate-500 font-medium mb-1">MRN: MRN-2024-023</p>
                                    <p class="text-xs text-slate-500 mb-1">Doctor: Dr. Krishnan</p>
                                    <p class="text-xs text-slate-500"><i class="fa-regular fa-clock mr-1"></i> Check-in: 9:55 AM</p>
                                </div>
                                <div class="border-l border-slate-100 pl-6">
                                     <p class="text-xs text-slate-500 mb-1">Department: Pediatrics</p>
                                     <p class="text-xs text-slate-500 mb-1">Room: Room 105</p>
                                     <p class="text-sm text-slate-800 font-bold"><i class="fa-solid fa-stopwatch mr-1 text-slate-400"></i> Wait: 15 mins</p>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2">
                                <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all shadow-sm flex items-center gap-2">
                                    <i class="fa-regular fa-bell"></i> Notify Doctor
                                </button>
                                <button class="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                                    <i class="fa-regular fa-pen-to-square"></i> Update
                                </button>
                            </div>
                        </div>
                         <div class="flex items-center justify-between p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                            <div class="flex gap-6">
                                <div>
                                    <h4 class="text-base font-bold text-slate-800 flex items-center gap-3 mb-2">
                                        Priya Sharma <span class="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">ready</span>
                                    </h4>
                                    <p class="text-xs text-slate-500 font-medium mb-1">MRN: MRN-2024-045</p>
                                    <p class="text-xs text-slate-500 mb-1">Doctor: Dr. Deshmukh</p>
                                    <p class="text-xs text-slate-500"><i class="fa-regular fa-clock mr-1"></i> Check-in: 9:30 AM</p>
                                </div>
                                <div class="border-l border-slate-100 pl-6">
                                     <p class="text-xs text-slate-500 mb-1">Department: Cardiology</p>
                                     <p class="text-xs text-slate-500 mb-1">Room: Room 203</p>
                                     <p class="text-sm text-slate-800 font-bold"><i class="fa-solid fa-stopwatch mr-1 text-slate-400"></i> Wait: 25 mins</p>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2">
                                <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all shadow-sm flex items-center gap-2">
                                    <i class="fa-regular fa-bell"></i> Notify Doctor
                                </button>
                                <button class="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                                    <i class="fa-regular fa-pen-to-square"></i> Update
                                </button>
                            </div>
                        </div>
                        <div class="flex items-center justify-between p-5 bg-red-50/50 rounded-xl border border-red-100 shadow-sm">
                            <div class="flex gap-6">
                                <div>
                                    <h4 class="text-base font-bold text-slate-800 flex items-center gap-3 mb-2">
                                        Robert Martinez <span class="bg-red-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1"><i class="fa-solid fa-triangle-exclamation text-[10px]"></i> URGENT</span> <span class="bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-full">waiting</span>
                                    </h4>
                                    <p class="text-xs text-slate-500 font-medium mb-1">MRN: MRN-2024-089</p>
                                    <p class="text-xs text-slate-500 mb-1">Doctor: Dr. Iyer</p>
                                    <p class="text-xs text-slate-500"><i class="fa-regular fa-clock mr-1"></i> Check-in: 10:15 AM</p>
                                </div>
                                <div class="border-l border-red-100 pl-6">
                                     <p class="text-xs text-slate-500 mb-1">Department: Emergency</p>
                                     <p class="text-xs text-slate-500 mb-1">Room: Triage 2</p>
                                     <p class="text-sm text-slate-800 font-bold"><i class="fa-solid fa-stopwatch mr-1 text-slate-400"></i> Wait: 5 mins</p>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2">
                                <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all shadow-sm flex items-center gap-2">
                                    <i class="fa-regular fa-bell"></i> Notify Doctor
                                </button>
                                <button class="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                                    <i class="fa-regular fa-pen-to-square"></i> Update
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            phone: `
                <div class="grid grid-cols-4 gap-6 mb-8">
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-medium text-slate-500 mb-2">Active Calls</h3>
                        <div class="flex items-baseline gap-2">
                            <span class="text-3xl font-bold text-slate-800">3</span>
                            <span class="text-sm text-slate-500">Currently on line</span>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-medium text-slate-500 mb-2">In Queue</h3>
                        <div class="flex items-baseline gap-2">
                            <span class="text-3xl font-bold text-slate-800">7</span>
                            <span class="text-sm text-yellow-600 font-medium">Waiting for callback</span>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-medium text-slate-500 mb-2">Completed Today</h3>
                        <div class="flex items-baseline gap-2">
                            <span class="text-3xl font-bold text-slate-800">45</span>
                            <span class="text-sm text-green-600 font-medium">↑ 8 from yesterday</span>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-medium text-slate-500 mb-2">Missed Calls</h3>
                        <div class="flex items-baseline gap-2">
                            <span class="text-3xl font-bold text-red-600">2</span>
                            <span class="text-sm text-slate-500">Needs follow-up</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                    <h2 class="text-lg font-bold text-slate-800 mb-6">Phone Queue</h2>
                    <div class="space-y-4">
                        <div class="flex items-center justify-between p-5 bg-green-50/50 rounded-xl border border-green-100 shadow-sm">
                            <div class="flex gap-4 items-start">
                                <div class="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                                <div>
                                    <h4 class="text-base font-bold text-slate-800 flex items-center gap-3 mb-1">
                                        Michael Chen <span class="bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">active</span>
                                    </h4>
                                    <p class="text-sm text-slate-600 mb-1"><i class="fa-solid fa-phone-flip text-xs mr-2 text-slate-400"></i> (555) 234-5678</p>
                                    <p class="text-sm text-slate-800 font-medium mb-1">Appointment Confirmation</p>
                                    <p class="text-xs text-slate-500">Duration: 2:34</p>
                                </div>
                            </div>
                             <div class="text-right">
                                <p class="text-xs text-slate-500 font-medium mb-4">MRN: MRN-2024-045</p>
                                <button class="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all flex items-center gap-2">
                                    <i class="fa-regular fa-file-lines"></i> View Record
                                </button>
                            </div>
                        </div>
                         <div class="flex items-center justify-between p-5 bg-green-50/50 rounded-xl border border-green-100 shadow-sm">
                            <div class="flex gap-4 items-start">
                                <div class="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                                <div>
                                    <h4 class="text-base font-bold text-slate-800 flex items-center gap-3 mb-1">
                                        Sneha Patel <span class="bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">active</span>
                                    </h4>
                                    <p class="text-sm text-slate-600 mb-1"><i class="fa-solid fa-phone-flip text-xs mr-2 text-slate-400"></i> (555) 567-8901</p>
                                    <p class="text-sm text-slate-800 font-medium mb-1">Prescription Refill</p>
                                    <p class="text-xs text-slate-500">Duration: 1:15</p>
                                </div>
                            </div>
                             <div class="text-right">
                                <p class="text-xs text-slate-500 font-medium mb-4">MRN: MRN-2024-078</p>
                                <button class="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all flex items-center gap-2">
                                    <i class="fa-regular fa-file-lines"></i> View Record
                                </button>
                            </div>
                        </div>
                        <div class="flex items-center justify-between p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                            <div class="flex gap-4 items-start">
                                <div class="w-10 h-10 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center shrink-0">
                                    <i class="fa-solid fa-phone-slash"></i>
                                </div>
                                <div>
                                    <h4 class="text-base font-bold text-slate-800 flex items-center gap-3 mb-1">
                                        James Wilson <span class="bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">active</span> <span class="bg-red-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1"><i class="fa-solid fa-triangle-exclamation text-[10px]"></i> HIGH</span>
                                    </h4>
                                    <p class="text-sm text-slate-600 mb-1"><i class="fa-solid fa-phone-flip text-xs mr-2 text-slate-400"></i> (555) 456-7890</p>
                                </div>
                            </div>
                             <div class="text-right">
                                <p class="text-xs text-slate-500 font-medium mb-4">MRN: MRN-2024-067</p>
                                <button class="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all flex items-center gap-2">
                                    <i class="fa-regular fa-file-lines"></i> View Record
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            billing: `
                <div class="grid grid-cols-4 gap-6 mb-8">
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-medium text-slate-500 mb-2">Pending Payments</h3>
                        <div class="flex flex-col">
                            <span class="text-3xl font-bold text-slate-800">$4,580</span>
                            <span class="text-sm text-slate-500 mt-1">18 outstanding</span>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-medium text-slate-500 mb-2">Collected Today</h3>
                        <div class="flex flex-col">
                            <span class="text-3xl font-bold text-slate-800">$2,340</span>
                            <span class="text-sm text-green-600 font-medium mt-1">↑ from 12 payments</span>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-medium text-slate-500 mb-2">Insurance Claims</h3>
                        <div class="flex flex-col">
                            <span class="text-3xl font-bold text-slate-800">8</span>
                            <span class="text-sm text-yellow-600 font-medium mt-1">Pending verification</span>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-medium text-slate-500 mb-2">Failed Transactions</h3>
                        <div class="flex flex-col">
                            <span class="text-3xl font-bold text-red-600">3</span>
                            <span class="text-sm text-slate-500 mt-1">Needs resolution</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                    <h2 class="text-lg font-bold text-slate-800 mb-6">Billing Queue</h2>
                    <div class="space-y-4">
                        <div class="flex items-center justify-between p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                            <div class="flex gap-8">
                                <div>
                                    <h4 class="text-base font-bold text-slate-800 flex items-center gap-3 mb-2">
                                        Priya Sharma <span class="bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-full">pending</span>
                                    </h4>
                                    <p class="text-xs text-slate-500 font-medium mb-1">MRN: MRN-2024-001</p>
                                    <p class="text-xs text-slate-500 mb-1">Insurance: Blue Cross</p>
                                    <p class="text-xs text-slate-500">Service: Cardiology Consultation</p>
                                </div>
                                <div>
                                     <span class="text-2xl font-bold text-blue-600">$250.00</span>
                                </div>
                                <div class="border-l border-slate-100 pl-8">
                                     <p class="text-xs text-slate-500 mb-1">Type: Copay</p>
                                     <p class="text-xs text-slate-500">Visit: Dec 17, 2024</p>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2">
                                <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all shadow-sm flex items-center justify-center gap-2">
                                    <i class="fa-regular fa-credit-card"></i> Process Payment
                                </button>
                                <button class="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                                    <i class="fa-regular fa-paper-plane"></i> Send Invoice
                                </button>
                            </div>
                        </div>
                        <div class="flex items-center justify-between p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                            <div class="flex gap-8">
                                <div>
                                    <h4 class="text-base font-bold text-slate-800 flex items-center gap-3 mb-2">
                                        Arjun Kumar <span class="bg-green-50 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">processing</span>
                                    </h4>
                                    <p class="text-xs text-slate-500 font-medium mb-1">MRN: MRN-2024-045</p>
                                    <p class="text-xs text-slate-500 mb-1">Insurance: None</p>
                                    <p class="text-xs text-slate-500">Service: New Patient Visit</p>
                                </div>
                                <div>
                                     <span class="text-2xl font-bold text-blue-600">$450.00</span>
                                </div>
                                <div class="border-l border-slate-100 pl-8">
                                     <p class="text-xs text-slate-500 mb-1">Type: Self-Pay</p>
                                     <p class="text-xs text-slate-500">Visit: Dec 17, 2024</p>
                                </div>
                            </div>
                             <div class="flex flex-col gap-2 opacity-50 pointer-events-none">
                                <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
                                    <i class="fa-solid fa-spinner fa-spin"></i> Processing
                                </button>
                            </div>
                        </div>
                        <div class="flex items-center justify-between p-5 bg-green-50/30 rounded-xl border border-green-100 shadow-sm">
                            <div class="flex gap-8">
                                <div>
                                    <h4 class="text-base font-bold text-slate-800 flex items-center gap-3 mb-2">
                                        Ananya Reddy <span class="bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">paid</span>
                                    </h4>
                                    <p class="text-xs text-slate-500 font-medium mb-1">MRN: MRN-2024-023</p>
                                </div>
                                <div>
                                     <span class="text-2xl font-bold text-blue-600">$180.00</span>
                                </div>
                                <div class="border-l border-slate-100 pl-8">
                                     <p class="text-xs text-slate-500 mb-1">Type: Deductible</p>
                                </div>
                            </div>
                            <div>
                                <button class="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                                    <i class="fa-solid fa-download"></i> Receipt
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            noshow: `
                 <div class="grid grid-cols-4 gap-6 mb-8">
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-medium text-slate-500 mb-2">This Month</h3>
                        <div class="flex flex-col">
                            <span class="text-3xl font-bold text-slate-800">23</span>
                            <span class="text-sm text-slate-500 mt-1">No-shows recorded</span>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-medium text-slate-500 mb-2">No-Show Rate</h3>
                        <div class="flex flex-col">
                            <span class="text-3xl font-bold text-slate-800">7.2%</span>
                            <span class="text-sm text-green-600 font-medium mt-1">↓ 1.3% from last month</span>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-medium text-slate-500 mb-2">Rescheduled</h3>
                        <div class="flex flex-col">
                            <span class="text-3xl font-bold text-slate-800">18</span>
                            <span class="text-sm text-slate-500 mt-1">78% recovery rate</span>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-medium text-slate-500 mb-2">Lost Revenue</h3>
                        <div class="flex flex-col">
                            <span class="text-3xl font-bold text-slate-800">$2,450</span>
                            <span class="text-sm text-red-600 font-medium mt-1">This month</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                    <h2 class="text-lg font-bold text-slate-800 mb-6">No-Show Records</h2>
                    <div class="space-y-4">
                        <div class="flex items-center justify-between p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                            <div class="flex gap-4 items-start">
                                <div class="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0">
                                    <i class="fa-solid fa-user-xmark"></i>
                                </div>
                                <div>
                                    <h4 class="text-base font-bold text-slate-800 flex items-center gap-3 mb-1">
                                        David Brown <span class="bg-red-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">2x No-Show</span> <span class="bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-full">pending-reschedule</span>
                                    </h4>
                                    <p class="text-sm text-slate-500 mb-1">MRN: MRN-2024-156</p>
                                    <p class="text-sm text-red-600 font-medium mb-1">Missed: Dec 15, 2024 at 10:00 AM</p>
                                    <p class="text-xs text-slate-500 mb-1">Dr. Deshmukh - Cardiology</p>
                                    <p class="text-xs text-slate-500">Last Contact: Dec 15, 2024</p>
                                </div>
                            </div>
                             <div class="text-right flex flex-col items-end gap-4">
                                <div>
                                     <p class="text-sm text-slate-600 mb-1"><i class="fa-solid fa-phone-flip text-xs mr-2 text-slate-400"></i> (555) 789-0123</p>
                                     <p class="text-sm font-bold text-red-600">No-Show Fee: $50</p>
                                </div>
                                <div class="flex gap-2">
                                     <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all shadow-sm flex items-center gap-2">
                                        <i class="fa-regular fa-calendar-plus"></i> Book New Slot
                                    </button>
                                    <button class="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all flex items-center gap-2">
                                        <i class="fa-regular fa-file-lines"></i> View History
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                            <div class="flex gap-4 items-start">
                                <div class="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0">
                                    <i class="fa-solid fa-user-xmark"></i>
                                </div>
                                <div>
                                    <h4 class="text-base font-bold text-slate-800 flex items-center gap-3 mb-1">
                                        Jennifer Garcia <span class="bg-red-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">1x No-Show</span> <span class="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">contacted</span>
                                    </h4>
                                    <p class="text-sm text-slate-500 mb-1">MRN: MRN-2024-178</p>
                                    <p class="text-sm text-red-600 font-medium mb-1">Missed: Dec 14, 2024 at 2:30 PM</p>
                                    <p class="text-xs text-slate-500 mb-1">Dr. Iyer - General Practice</p>
                                    <p class="text-xs text-slate-500">Last Contact: Dec 16, 2024</p>
                                    <p class="text-xs text-green-600 font-medium mt-2">Rescheduled: Dec 22, 2024 at 3:00 PM</p>
                                </div>
                            </div>
                             <div class="text-right flex flex-col items-end gap-4">
                                <div>
                                     <p class="text-sm text-slate-600 mb-1"><i class="fa-solid fa-phone-flip text-xs mr-2 text-slate-400"></i> (555) 890-1234</p>
                                     <p class="text-sm font-bold text-red-600">No-Show Fee: $50</p>
                                </div>
                                <div>
                                    <button class="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all flex items-center gap-2">
                                        <i class="fa-regular fa-file-lines"></i> View History
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            ai: `
                 <div class="bg-purple-50 border border-purple-100 p-6 rounded-xl mb-8 flex items-start gap-4">
                    <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center shrink-0">
                        <i class="fa-solid fa-wand-magic-sparkles text-xl"></i>
                    </div>
                    <div>
                        <h2 class="text-lg font-bold text-slate-800 mb-1">AI-Powered Insights</h2>
                        <p class="text-sm text-slate-600">Intelligent analysis of front desk operations to improve efficiency and patient experience.</p>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-8">
                    <div class="space-y-8">
                        <div>
                            <h3 class="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"><i class="fa-solid fa-arrow-trend-up text-green-600"></i> Appointment Optimization</h3>
                            <div class="space-y-4">
                                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                                    <h4 class="text-sm font-bold text-slate-800 flex items-center gap-2"><i class="fa-regular fa-clock text-blue-600"></i> Peak Hours</h4>
                                    <p class="text-sm text-slate-600 mt-1">Highest traffic: 9 AM - 11 AM (28 appointments)</p>
                                    <p class="text-xs text-slate-500 mt-1">Consider adding staff during these hours</p>
                                </div>
                                <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                                    <h4 class="text-sm font-bold text-slate-800 flex items-center gap-2"><i class="fa-regular fa-circle-check text-green-600"></i> Efficient Scheduling</h4>
                                    <p class="text-sm text-slate-600 mt-1">Thursday and Friday have optimal appointment distribution</p>
                                </div>
                                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                                    <h4 class="text-sm font-bold text-slate-800 flex items-center gap-2"><i class="fa-regular fa-hourglass-half text-yellow-600"></i> Scheduling Gap</h4>
                                    <p class="text-sm text-slate-600 mt-1">2 PM - 3 PM slot underutilized (only 4 appointments)</p>
                                </div>
                            </div>
                        </div>

                         <div>
                            <h3 class="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"><i class="fa-regular fa-clock text-yellow-600"></i> Wait Time Analysis</h3>
                            <div class="space-y-4">
                                <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                                    <h4 class="text-sm font-bold text-slate-800 flex items-center gap-2"><i class="fa-solid fa-arrow-trend-down text-green-600"></i> Improved Efficiency</h4>
                                    <p class="text-sm text-slate-600 mt-1">Average wait time decreased from 23 to 18 minutes</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-8">
                        <div>
                            <h3 class="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"><i class="fa-solid fa-user-xmark text-red-600"></i> No-Show Predictions</h3>
                            <div class="space-y-4">
                                <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                                    <h4 class="text-sm font-bold text-slate-800 flex items-center gap-2"><i class="fa-solid fa-triangle-exclamation text-red-600"></i> High Risk</h4>
                                    <p class="text-sm text-slate-600 mt-1 font-medium">3 patients at 85% risk of no-show tomorrow</p>
                                    <p class="text-xs text-slate-500 mt-1">Recommendation: Send confirmation reminder</p>
                                </div>
                                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                                    <h4 class="text-sm font-bold text-slate-800 flex items-center gap-2"><i class="fa-solid fa-chart-pie text-blue-600"></i> Pattern Analysis</h4>
                                    <p class="text-sm text-slate-600 mt-1">Monday morning appointments have 12% higher no-show rate</p>
                                </div>
                                <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                                    <h4 class="text-sm font-bold text-slate-800 flex items-center gap-2"><i class="fa-regular fa-circle-check text-green-600"></i> Success Rate</h4>
                                    <p class="text-sm text-slate-600 mt-1">Reminder system reduced no-shows by 23% this month</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"><i class="fa-solid fa-dollar-sign text-green-600"></i> Revenue Insights</h3>
                            <div class="space-y-4">
                                <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                                    <h4 class="text-sm font-bold text-slate-800 flex items-center gap-2"><i class="fa-solid fa-arrow-trend-up text-green-600"></i> Collection Rate</h4>
                                    <p class="text-sm text-slate-600 mt-1">87% of copays collected at check-in (target: 90%)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        };

        // Function to handle page navigation
        function showPage(pageId) {
            // Update Content
            const contentArea = document.getElementById('content-area');
            contentArea.innerHTML = pages[pageId];

            // Update Title and Subtitle based on pageId
            const pageTitle = document.getElementById('page-title');
            const pageSubtitle = document.getElementById('page-subtitle');

            switch (pageId) {
                case 'dashboard':
                    pageTitle.textContent = 'Dashboard';
                    pageSubtitle.textContent = 'Front Desk Operations';
                    break;
                case 'schedule':
                    pageTitle.textContent = 'Schedule Management';
                    pageSubtitle.textContent = 'Front Desk Operations';
                    break;
                case 'waiting':
                    pageTitle.textContent = 'Waiting Room';
                    pageSubtitle.textContent = 'Front Desk Operations';
                    break;
                case 'phone':
                    pageTitle.textContent = 'Phone Queue';
                    pageSubtitle.textContent = 'Front Desk Operations';
                    break;
                 case 'billing':
                    pageTitle.textContent = 'Billing Support';
                    pageSubtitle.textContent = 'Front Desk Operations';
                    break;
                case 'noshow':
                    pageTitle.textContent = 'No-Show Management';
                    pageSubtitle.textContent = 'Front Desk Operations';
                    break;
                case 'ai':
                    pageTitle.textContent = 'AI Analysis';
                    pageSubtitle.textContent = 'Front Desk Operations';
                    break;
            }

            // Update Active Navigation Link State
            const links = document.querySelectorAll('.sidebar-link');
            links.forEach(link => link.classList.remove('active'));
            document.getElementById('nav-' + pageId).classList.add('active');

            // Scroll to top of content area
            contentArea.scrollTop = 0;
        }

        // Load Dashboard by default on initialization
        showPage('dashboard');
