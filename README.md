  # Installation

To set up the project, follow these steps:

##  Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/lets-Build-and-debug/airbnb-backend.git
```

##  Install Packages to your root folder

```
cd airbnb-backend
npm install
```
##  1. axios 
```
npm install axios
```
## 2. express ##
```
npm install express
```
## 3. prisma 
```
npm install prisma --save-dev
npm install @prisma/client
npx prisma init
```

## 4. Migrate Database 

```
npx prisma migrate dev --name your_migration_name
npx prisma generate
```

## 5. run project 

```
node index.js
```











