# 001 User

   # api/v1/register   => to register a user
        {
            username: "david keukeu",
            email: "davidkeukeu88@gmail.com",
            password:"12345678"
        }
   
   # api/v1/login      =>  to login the user
        {
            email:"davidkeukeu88@gmail.com",
            password:"12345678"
        }

# 002 Member
   

   # /members      => to get all members

   # /members/:activityId  =>  to get all members by activity

   # /members      =>  to create a new member
        {
            name:"alexander"
            postname:"chambu"
            phone:"+243 970652307"
            status:"beneficiary"
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

  # /cotisation/:activityId => to get all cotisations by activity

  # /cotisation/:memberId => to get all member's cotisations in a activity

  # /cotisation     =>   to create a new cotisation
            {
                amount:500,
                activityId:"43f33fd1-9248-4306-affc-dae91e83ba57",
                memberId:"43f33fd1-9248-4306-affc-dae91e83ba57"
            }
  # /cotisation/43f33fd1-9248-4306-affc-dae91e83ba57   =>  for update and delete 

