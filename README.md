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
```
npm install axios
```
```
npm install express
```
```
npm install prisma --save-dev
npm install @prisma/client
npx prisma init
##after making changes to the schema run these cmd's below to generate a new migration folder
npx prisma migrate dev --name your_migration_name
npx prisma generate
```










