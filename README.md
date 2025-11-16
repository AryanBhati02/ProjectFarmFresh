# 🌾 Farm Fresh – Online Grocery Store  
A modern, full-stack e-commerce platform that connects consumers directly with farmers to deliver fresh, healthy, and farm-grown products.  
This system was built as a college project with production-level structure, showcasing complete frontend + backend integration.

---

## 🚀 Overview  
Farm Fresh eliminates the gap between farmers and buyers.  
It offers a seamless shopping experience with product browsing, cart management, checkout, authentication, and a fully functional contact system.

The platform includes a clean UI, modular backend architecture, and database-driven content management using MongoDB.

---

## 🧩 Key Features  

### 🛍️ **User Functionalities**
- Explore fresh farm products in multiple categories  
- Add products to cart with real-time cart count sync  
- Full cart management (add, remove, update quantity)  
- Checkout without login  
- Secure Login system using MongoDB + Bcrypt  
- Contact Form sends messages directly to admin email  
- Mobile-responsive design across all pages  

### 🔧 **Admin Functionalities**
- Add, Edit, Delete products using secure routes  
- Products stored and retrieved from MongoDB  
- Server-side validation and clean routing structure  
- Easy expandability for future admin dashboard  

---

## 🛠️ Tech Stack  

### **Frontend**
- HTML5  
- CSS3 (Custom responsive layouts)  
- JavaScript (Dynamic rendering & cart logic)  
- EJS Templating (Reusable header/footer components)

### **Backend**
- Node.js  
- Express.js  
- Express-Session (User sessions)  
- Connect-Flash (User notifications)  
- Bcrypt.js (Password hashing)

### **Database**
- **MongoDB** + **Mongoose** (Schema-based models)

### **Utilities**
- **Nodemailer** (Contact form email system)  
- **Dotenv** (Environment variable protection)  

---

## 📬 Contact Form – Email Integration  
The contact form is fully functional using Gmail SMTP via Nodemailer.  
All submitted messages are instantly delivered to the admin inbox:


The system supports:
- Any sender email  
- Secure login via App Password  
- Error handling and user success notification  

---

## 📁 Project Structure  
ProjectFarmFresh/
│── app.js
│── package.json
│── package-lock.json
│── .env
│── .gitignore
│── README.md
│
├── data/
│   └── products.json
│
├── models/
│   ├── Product.js
│   └── User.js
│
├── middleware/
│   └── auth.js
│
├── public/
│   ├── css/
│   │   ├── about.css
│   │   ├── cart.css
│   │   ├── checkout.css
│   │   ├── contact.css
│   │   ├── explore.css
│   │   ├── login.css
│   │   └── style.css
│   │
│   ├── images/
│   │   └── (project images)
│   │
│   └── js/
│       ├── cart.js
│       ├── checkout.js
│       ├── contact.js
│       ├── explore.js
│       ├── login.js
│       └── main.js
│
├── routes/
│   ├── adminRoutes.js
│   ├── authRoutes.js
│   ├── contactRoutes.js
│   └── productRoutes.js
│
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   │
│   ├── admin/
│   │   ├── addProduct.ejs
│   │   ├── editProduct.ejs
│   │   └── manageProducts.ejs
│   │
│   ├── about.ejs
│   ├── cart.ejs
│   ├── checkout.ejs
│   ├── contact.ejs
│   ├── explore.ejs
│   ├── index.ejs
│   ├── login.ejs
│   ├── profile.ejs
│   └── register.ejs
│
└── seeds/
    └── seed.js
---

## 🔒 Authentication  
The login system is backed by:  
- Encrypted password storage using **bcrypt**  
- Database lookup using **Mongoose**  
- Clean session-based login state  
- Flash alerts for feedback  
- Automatic redirect to homepage upon successful login  

---

## 👨‍💻 Contributors
| Name                | Role                 |
| ------------------- | -------------------- |
| **Aryan Bhati**     | Full-Stack Developer |
| **Prateek Rathore** | Developer            |
| **Prakrisht Singh** | Developer            |

---

## 📄 License
This project was developed for academic and educational use.
You may use, modify, or extend it freely.

---

## ⭐ Acknowledgements
Special thanks to our faculty for guidance, and to the contributors who worked collaboratively to make this project production-ready.
