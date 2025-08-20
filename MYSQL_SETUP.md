# MySQL Database Setup for We Park

## 🗄️ **Step 1: Install MySQL Server**

### Option A: Install MySQL Server locally
1. Download and install MySQL Server from [mysql.com](https://dev.mysql.com/downloads/mysql/)
2. During installation, remember your root password
3. Start MySQL service

### Option B: Use Docker (Recommended)
```bash
# Pull and run MySQL container
docker run --name wepark-mysql \
  -e MYSQL_ROOT_PASSWORD=password \
  -e MYSQL_DATABASE=wepark_db \
  -p 3306:3306 \
  -d mysql:8.0

# Check if running
docker ps
```

### Option C: Use XAMPP/WAMP/MAMP
- Install XAMPP, WAMP, or MAMP
- Start Apache and MySQL services
- Use phpMyAdmin to create database

## 🔧 **Step 2: Install MySQL Client for Node.js**

```bash
cd we-park-app
npm install mysql2
```

## 🗃️ **Step 3: Create Database**

Connect to MySQL and create the database:

```sql
CREATE DATABASE wepark_db;
USE wepark_db;
```

## 🔗 **Step 4: Update Environment Variables**

Update your `.env.local` file with your MySQL credentials:

```env
# Replace with your actual MySQL credentials
DATABASE_URL="mysql://username:password@localhost:3306/wepark_db"

# Examples:
# For root user with password:
DATABASE_URL="mysql://root:yourpassword@localhost:3306/wepark_db"

# For custom user:
DATABASE_URL="mysql://wepark_user:wepark_pass@localhost:3306/wepark_db"

# For Docker setup:
DATABASE_URL="mysql://root:password@localhost:3306/wepark_db"
```

## 🚀 **Step 5: Generate and Run Migrations**

```bash
cd we-park-app

# Generate Prisma client
npx prisma generate

# Create and run migrations
npx prisma migrate dev --name init

# Optional: View your database
npx prisma studio
```

## 🧪 **Step 6: Seed Demo Data (Optional)**

```bash
# Create demo users with roles
npx prisma db seed
```

## 🔍 **Verify Setup**

1. Check if database tables were created:
```sql
SHOW TABLES;
```

2. Check if demo users exist:
```sql
SELECT u.email, ur.role FROM User u 
LEFT JOIN UserRole ur ON u.id = ur.userId;
```

## 📋 **Common Database URLs**

| Setup | Database URL |
|-------|-------------|
| Local MySQL | `mysql://root:password@localhost:3306/wepark_db` |
| Docker MySQL | `mysql://root:password@localhost:3306/wepark_db` |
| XAMPP | `mysql://root:@localhost:3306/wepark_db` |
| Remote MySQL | `mysql://user:pass@hostname:3306/wepark_db` |

## 🛠️ **Troubleshooting**

### Connection Issues:
- Ensure MySQL server is running
- Check port 3306 is not blocked
- Verify username/password are correct
- Make sure database `wepark_db` exists

### Permission Issues:
```sql
CREATE USER 'wepark_user'@'localhost' IDENTIFIED BY 'wepark_pass';
GRANT ALL PRIVILEGES ON wepark_db.* TO 'wepark_user'@'localhost';
FLUSH PRIVILEGES;
```

### Reset Database:
```bash
npx prisma migrate reset
```

That's it! Your We Park app is now configured to use MySQL instead of SQLite.
