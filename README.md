# Installation
1. Clone the repository:
git clone https://github.com/lets-Build-and-debug/airbnb-backend.git


After cloning this repo:-

## Adding packages to your root directory
*** here the root directory is => /airbnb-backend ***

2. npm install

## packages list
1 .axios:-
  - npm install axios

2. express:-
  - npm install express

3. prisma:-
  - npm install prisma --save-dev 
             or
  - yarn add prisma --dev

###installing prisma client:-###

  - npm i @prisma/client

 ##Initialize Prisma:-##

  - npx prisma init

 ##migrating databse / after making changes to the schema##

  - npx prisma migrate dev --name your_migration_name
  - npx prisma generate








