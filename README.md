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
```text
ProjectFarmFresh/
├── app.js                       # Main Express server file
├── package.json                 # Project dependencies and metadata
├── package-lock.json            # Dependency lock file
├── .env                         # Environment variables
├── .gitignore                   # Git ignore rules

├── seeds/
│   └── seed.js                  # Seed script to populate database

├── data/
│   └── products.json            # Products data for seeding or testing

├── middleware/
│   └── auth.js                  # Authentication middleware

├── models/
│   ├── Product.js               # Product schema/model
│   └── User.js                  # User schema/model

├── public/
│   ├── css/
│   │   ├── about.css            # About page styles
│   │   ├── cart.css             # Cart page styles
│   │   ├── checkout.css         # Checkout page styles
│   │   ├── contact.css          # Contact page styles
│   │   ├── explore.css          # Explore page styles
│   │   ├── login.css            # Login page styles
│   │   └── style.css            # Global styling
│   ├── images/                  # All static images
│   └── js/
│       ├── cart.js              # Cart page functionality
│       ├── checkout.js          # Checkout functionality
│       ├── contact.js           # Contact page JS
│       ├── explore.js           # Explore page JS
│       ├── login.js             # Login page JS
│       └── main.js              # Shared/global JS

├── routes/
│   ├── adminRoutes.js           # Admin dashboard routes
│   ├── authRoutes.js            # Login/Signup routes
│   ├── contactRoutes.js         # Contact form routes
│   └── productRoutes.js         # Product-related routes

└── views/
    ├── admin/
    │   ├── addProduct.ejs       # Add new product page
    │   ├── editProduct.ejs      # Edit product page
    │   └── manageProducts.ejs   # Manage products page
    ├── partials/
    │   ├── footer.ejs           # Reusable footer
    │   └── header.ejs           # Reusable header
    ├── about.ejs                # About page
    ├── cart.ejs                 # Cart page
    ├── checkout.ejs             # Checkout page
    ├── contact.ejs              # Contact page
    ├── explore.ejs              # Explore page
    ├── index.ejs                # Homepage
    ├── login.ejs                # Login page
    ├── profile.ejs              # User profile page
    └── register.ejs             # Signup page
```

## 🔒 Authentication  
The login system is backed by:  
- Encrypted password storage using **bcrypt**  
- Database lookup using **Mongoose**  
- Clean session-based login state  
- Flash alerts for feedback  
- Automatic redirect to homepage upon successful login

---

## 🧪 How to Run Locally  

### 1️⃣ Clone the repository  
git clone https://github.com/AryanBhati02/ProjectFarmFresh

### 2️⃣ Install dependencies
 - npm install

### 3️⃣ Configure .env
 - MONGO_URI=your_connection_string\
 - EMAIL_USER=your_email@gmail.com\
 - EMAIL_PASS=your_app_password

### 4️⃣ Start the server
 - nodemon app.js

- Server runs at:
👉 http://localhost:3000

---

## 👨‍💻 Contributors
| Name                | Role                 |
| ------------------- | -------------------- |
| **Aryan Bhati**     | Developer            |
| **Prateek Rathore** | Developer            |
| **Prakrisht Singh** | Developer            |

---

## 📄 License
This project was developed for academic and educational use.
You may use, modify, or extend it freely.

---

## ⭐ Acknowledgements
Special thanks to our faculty for guidance, and to the contributors who worked collaboratively to make this project production-ready.
