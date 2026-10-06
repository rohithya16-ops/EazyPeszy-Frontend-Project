/* Eazypezy frontend data layer — localStorage mock backend. */
const DB={
  KEYS:{USERS:'ep_users',MENU:'ep_menu',ORDERS:'ep_orders',SESSION:'ep_session',COUPONS:'ep_coupons',GROUPS:'ep_groups',SETTINGS:'ep_settings',PAYMENTS:'ep_payments'},
  read(k,f){try{const r=localStorage.getItem(k);return r?JSON.parse(r):f}catch(e){return f}},
  write(k,v){localStorage.setItem(k,JSON.stringify(v))},
  seed(){
    const users=DB.getUsers();
    const base=[
      {name:'Asha Rao',email:'customer@demo.com',password:'demo123',role:'customer',address:'Flat 204, Green Avenue, Vijayawada'},
      {name:'Spice Route Manager',email:'manager@demo.com',password:'demo123',role:'manager',restaurant:'Spice Route'},
      {name:'Green Bowl Manager',email:'green@demo.com',password:'demo123',role:'manager',restaurant:'Green Bowl Cafe'},
      {name:'Urban Wok Manager',email:'urban@demo.com',password:'demo123',role:'manager',restaurant:'Urban Wok'},
      {name:'Dosa House Manager',email:'dosa@demo.com',password:'demo123',role:'manager',restaurant:'Dosa House'},
      {name:'Tandoori Tales Manager',email:'tandoori@demo.com',password:'demo123',role:'manager',restaurant:'Tandoori Tales'},
      {name:'Sweet Cravings Manager',email:'sweet@demo.com',password:'demo123',role:'manager',restaurant:'Sweet Cravings'},
      {name:'Coastal Curry Manager',email:'coastal@demo.com',password:'demo123',role:'manager',restaurant:'Coastal Curry'},
      {name:'The Biryani Lab Manager',email:'biryani@demo.com',password:'demo123',role:'manager',restaurant:'The Biryani Lab'},
      {name:'Cafe Terra Manager',email:'terra@demo.com',password:'demo123',role:'manager',restaurant:'Cafe Terra'},
      {name:'Street Spice Manager',email:'street@demo.com',password:'demo123',role:'manager',restaurant:'Street Spice'},
      {name:'Pizza District Manager',email:'pizza@demo.com',password:'demo123',role:'manager',restaurant:'Pizza District'},
      {name:'Healthy Harvest Manager',email:'harvest@demo.com',password:'demo123',role:'manager',restaurant:'Healthy Harvest'},
      {name:'Ravi Delivers',email:'delivery@demo.com',password:'demo123',role:'delivery'},
      {name:'Neha Delivers',email:'neha@demo.com',password:'demo123',role:'delivery'},
      {name:'Arjun Delivers',email:'arjun@demo.com',password:'demo123',role:'delivery'},
      {name:'Eazypezy Admin',email:'admin@eazypezy.com',password:'admin123',role:'admin'}
    ];
    base.forEach(u=>{if(!users.some(x=>x.email.toLowerCase()===u.email.toLowerCase()&&x.role===u.role))users.push(u)});DB.saveUsers(users);

    const restaurants=[
      ['Spice Route','North Indian','4.5','25–35 min','₹₹','https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'],
      ['Green Bowl Cafe','Healthy · Continental','4.3','20–30 min','₹₹','https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80'],
      ['Urban Wok','Chinese · Asian','4.4','25–35 min','₹₹','https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80'],
      ['Dosa House','South Indian','4.6','15–25 min','₹','https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1200&q=80'],
      ['Tandoori Tales','Tandoor · Mughlai','4.7','30–40 min','₹₹₹','https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=80'],
      ['Sweet Cravings','Desserts · Bakery','4.2','20–30 min','₹₹','https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80'],
      ['Coastal Curry','Andhra · Coastal','4.5','25–35 min','₹₹','https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80'],
      ['The Biryani Lab','Biryani · Indian','4.6','30–40 min','₹₹₹','https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80'],
      ['Cafe Terra','Cafe · Beverages','4.4','15–25 min','₹₹','https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80'],
      ['Street Spice','Street Food · Fast Food','4.3','20–30 min','₹','https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80'],
      ['Pizza District','Pizza · Italian','4.5','25–35 min','₹₹','https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1200&q=80'],
      ['Healthy Harvest','Salads · Bowls','4.6','20–30 min','₹₹','https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80']
    ];
    const menus={
      'Spice Route':['Paneer Butter Masala','Chicken Biryani','Garlic Naan','Dal Makhani','Butter Chicken','Tandoori Roti','Jeera Rice','Veg Korma','Chicken Tikka','Paneer Tikka','Aloo Gobi','Rajma Masala','Chole','Kadhai Paneer','Lassi','Mango Lassi','Gulab Jamun','Rasmalai','Masala Papad','Raita'],
      'Green Bowl Cafe':['Buddha Bowl','Peri Peri Fries','Cold Brew','Avocado Toast','Quinoa Salad','Greek Salad','Pesto Pasta','Grilled Sandwich','Falafel Bowl','Hummus Plate','Fruit Bowl','Veg Wrap','Paneer Wrap','Iced Latte','Matcha Latte','Berry Smoothie','Granola Bowl','Tomato Soup','Corn Salad','Chocolate Oats'],
      'Urban Wok':['Kung Pao Chicken','Veg Hakka Noodles','Spring Rolls','Schezwan Fried Rice','Chilli Paneer','Manchurian','Chicken Momos','Veg Momos','Chow Mein','Hot Garlic Noodles','Thai Curry','Pad Thai','Crispy Corn','Dragon Chicken','Fried Rice','Chilli Garlic Prawns','Dim Sum','Asian Slaw','Mango Bubble Tea','Jasmine Tea'],
      'Dosa House':['Masala Dosa','Idli Sambar','Medu Vada','Plain Dosa','Mysore Masala Dosa','Rava Dosa','Onion Uttapam','Pesarattu','Ghee Roast Dosa','Cheese Dosa','Set Dosa','Curd Rice','Lemon Rice','Tomato Rice','Sambar Vada','Filter Coffee','Badam Milk','Kesari Bath','Coconut Chutney','Mini Tiffin'],
      'Tandoori Tales':['Tandoori Chicken','Paneer Tikka','Rumali Roti','Chicken Seekh Kebab','Mutton Seekh Kebab','Butter Chicken','Dal Tadka','Kadhai Chicken','Mughlai Biryani','Tandoori Prawns','Malai Tikka','Afghani Chicken','Garlic Naan','Lachha Paratha','Shahi Paneer','Mutton Rogan Josh','Chicken Curry','Jeera Rice','Firni','Kulfi'],
      'Sweet Cravings':['Chocolate Brownie','Gulab Jamun','Mango Cheesecake','Red Velvet Cake','Chocolate Truffle','Blueberry Cheesecake','Churros','Waffles','Pancakes','Tiramisu','Fruit Tart','Donut Box','Chocolate Mousse','Carrot Cake','Banana Bread','Strawberry Shake','Oreo Shake','Hot Chocolate','Ice Cream Sundae','Kesar Kulfi'],
      'Coastal Curry':['Andhra Chicken Curry','Gongura Chicken','Royyala Iguru','Nellore Fish Curry','Gutti Vankaya','Pulihora','Bendakaya Fry','Kodi Vepudu','Chepala Vepudu','Prawn Fry','Avakai Rice','Curd Rice','Pesarattu','Andhra Meals','Ragi Sangati','Ulavacharu','Chicken 65','Mirchi Bajji','Poornam Boorelu','Payasam'],
      'The Biryani Lab':['Hyderabadi Chicken Biryani','Mutton Biryani','Veg Dum Biryani','Egg Biryani','Paneer Biryani','Chicken 65','Mirchi Ka Salan','Dahi Ke Kebab','Mutton Shikampuri','Chicken Kebab','Double Ka Meetha','Qubani Ka Meetha','Irani Chai','Chicken 555','Mutton Fry','Biryani Family Pack','Veg Starter Platter','Chicken Starter Platter','Raita','Salad'],
      'Cafe Terra':['Cappuccino','Cold Brew','Cafe Latte','Espresso','Mocha','Americano','Iced Latte','Hazelnut Coffee','Blueberry Muffin','Chocolate Muffin','Croissant','Veg Panini','Chicken Panini','Pesto Sandwich','Pasta Arrabbiata','Pasta Alfredo','French Fries','Cheesecake Slice','Lemon Tea','Caramel Frappe'],
      'Street Spice':['Pav Bhaji','Vada Pav','Samosa','Pani Puri','Bhel Puri','Dahi Puri','Aloo Tikki','Chole Bhature','Kathi Roll','Paneer Roll','Chicken Roll','Egg Roll','Masala Maggi','Cheese Maggi','Masala Fries','Loaded Fries','Bread Pakora','Cutlet','Kulfi Falooda','Masala Chai'],
      'Pizza District':['Margherita Pizza','Farmhouse Pizza','Paneer Tikka Pizza','Chicken Pepperoni Pizza','BBQ Chicken Pizza','Veggie Supreme','Four Cheese Pizza','Pesto Pizza','Garlic Bread','Cheese Garlic Bread','Pasta Arrabbiata','Pasta Alfredo','Lasagna','Chicken Wings','Potato Wedges','Tiramisu','Brownie','Cheesy Dip','Iced Tea','Lemonade'],
      'Healthy Harvest':['Avocado Salad','Quinoa Power Bowl','Protein Bowl','Chickpea Salad','Paneer Salad','Grilled Chicken Salad','Mediterranean Bowl','Sprout Chaat','Fruit & Nut Bowl','Overnight Oats','Greek Yogurt Bowl','Hummus & Veggies','Sweet Potato Bowl','Tofu Bowl','Green Smoothie','Berry Smoothie','Coconut Water','Lentil Soup','Roasted Veggies','Peanut Chia Pudding']
    };
    const imagePool=[
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1606313564200-e75d5e30476a?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80'
    ];
    const old=DB.getMenu();
    if(old.length<200||localStorage.getItem('ep_menu_version')!=='8'){
      const menu=[];let n=1;
      restaurants.forEach((r,ri)=>{menus[r[0]].forEach((name,i)=>{
        const type=/chicken|mutton|fish|prawn|pork|egg|pepperoni|wings|kebab/i.test(name)?'nonveg':'veg';
        const category=i<3?'Popular':i<7?'Main Course':i<11?'Starters':i<15?'Specials':i<18?'Beverages':'Desserts';
        const price=type==='nonveg'?220+(i%6)*35:80+(i%7)*25;
        menu.push({id:'m'+n++,restaurant:r[0],name,price,type,category,image:imagePool[(ri*2+i)%imagePool.length],bannerImage:r[5],rating:Number(r[2]),available:true,rescueEligible:i%5===0,rescuePrice:Math.round(price/2)});
      })});
      DB.write(DB.KEYS.MENU,menu);localStorage.setItem('ep_menu_version','8');
    }
    if(!localStorage.getItem(DB.KEYS.ORDERS))DB.write(DB.KEYS.ORDERS,[]);
    if(!localStorage.getItem(DB.KEYS.GROUPS))DB.write(DB.KEYS.GROUPS,[]);
    if(!localStorage.getItem(DB.KEYS.SETTINGS))DB.write(DB.KEYS.SETTINGS,{deliveryModes:{}});
    if(!localStorage.getItem(DB.KEYS.COUPONS))DB.write(DB.KEYS.COUPONS,[
      {code:'EAZY50',type:'flat',value:50,min:300,scope:'platform',active:true,label:'₹50 off on ₹300+'},
      {code:'WELCOME10',type:'percent',value:10,min:400,scope:'platform',active:true,label:'10% off on ₹400+'},
      {code:'SPICE20',type:'percent',value:20,min:500,scope:'restaurant',restaurant:'Spice Route',active:true,label:'20% off at Spice Route'}
    ]);
  },
  getUsers(){return DB.read(this.KEYS.USERS,[])},saveUsers(v){DB.write(this.KEYS.USERS,v)},
  findUser(email,role){return this.getUsers().find(u=>u.email.toLowerCase()===email.toLowerCase()&&u.role===role)},
  addUser(u){const a=this.getUsers();a.push(u);this.saveUsers(a)},
  setSession(u){this.write(this.KEYS.SESSION,{name:u.name,email:u.email,role:u.role,restaurant:u.restaurant||null})},getSession(){return this.read(this.KEYS.SESSION,null)},clearSession(){localStorage.removeItem(this.KEYS.SESSION)},
  getMenu(){return this.read(this.KEYS.MENU,[])},saveMenu(v){this.write(this.KEYS.MENU,v)},
  getRestaurants(){return [...new Set(this.getMenu().map(i=>i.restaurant))]},
  getRestaurantInfo(name){const m=this.getMenu().find(i=>i.restaurant===name);return m?{name, bannerImage:m.bannerImage,rating:m.rating}:null},
  getOrders(){return this.read(this.KEYS.ORDERS,[])},saveOrders(v){this.write(this.KEYS.ORDERS,v)},addOrder(o){const a=this.getOrders();a.unshift(o);this.saveOrders(a)},updateOrder(id,c){const a=this.getOrders(),i=a.findIndex(o=>o.id===id);if(i!==-1){a[i]={...a[i],...c};this.saveOrders(a)}},
  getCoupons(){return this.read(this.KEYS.COUPONS,[])},saveCoupons(v){this.write(this.KEYS.COUPONS,v)},
  getGroups(){return this.read(this.KEYS.GROUPS,[])},saveGroups(v){this.write(this.KEYS.GROUPS,v)},
  getSettings(){return this.read(this.KEYS.SETTINGS,{deliveryModes:{}})},saveSettings(v){this.write(this.KEYS.SETTINGS,v)},
  getPayments(){return this.read(this.KEYS.PAYMENTS,[])},savePayments(v){this.write(this.KEYS.PAYMENTS,v)}
};
DB.seed();
function requireRole(role){const s=DB.getSession();if(!s||s.role!==role){window.location.href='index.html';return null}return s}
function logout(){DB.clearSession();window.location.href='index.html'}
function escapeHtml(str){const d=document.createElement('div');d.textContent=str==null?'':str;return d.innerHTML}
function escapeAttr(str){return String(str||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
function money(n){return '₹'+Number(n||0).toLocaleString('en-IN')}
