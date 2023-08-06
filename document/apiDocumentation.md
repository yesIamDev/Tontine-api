# 001 User

   # api/v1/register   => to register a user
        {
            username: "david keukeu",
            emai: "davidkeukeu88@gmail.com",
            password:"12345678"
        }
   
   # api/v1/login      =>  to login the user
        {
            email:"davidkeukeu88@gmail.com",
            password:"12345678"
        }

# 002 Member
   

   # /members      => to get all members

   # /members      =>  to create a new member
        {
            name:"alexander"
            postname:"chambu"
            phone:"+243 970652307"
        }
   # /members/43f33fd1-9248-4306-affc-dae91e83ba57   =>  for update and delete 

# 003 Activity

   # /activity     =>  to get all activities

   # /activity    =>   to create a new activity
        {
            designation: "Galerie Takenga",
            designation: "Tontine regroupant les differentes boutiques de la galerie T",
            start: 15/08/2023,
            end: 15/09/2023
            cycle: "Par semaine",
            amountToGive: 500,
            status: "inProgress",
            members: 15,
            currency: USD
        }
  # /actvity/43f33fd1-9248-4306-affc-dae91e83ba57    =>  for update and delete

# 004 Cotisation

  # /cotisation      =>   to get all cotisations

  # /cotisation     =>   to create a new cotisation
            {
                amount:500,
                activityId:"43f33fd1-9248-4306-affc-dae91e83ba57",
                memberId:"43f33fd1-9248-4306-affc-dae91e83ba57"
            }
  # /cotisation/43f33fd1-9248-4306-affc-dae91e83ba57   =>  for update and delete 

# 005 Beneficiary

  # /beneficiary   =>   to create a new beneficiary on an activity
        {
            status:"invalid",
            memberId:"43f33fd1-9248-4306-affc-dae91e83ba57"
        }
  # /beneficiary/43f33fd1-9248-4306-affc-dae91e83ba57  =>  to update and delete