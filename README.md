# SomatiColors 

SomatiColors enables users with Somatoform symptomatology to plot events and situations in which they experience pain/fatigue onto their own customized timelines. With the ability to visualize, filter, and sort through their timelines, users are better able to find connections between their emotions and phsyical symptoms, leading them to discover the emotions behind their phsyical symptoms. 

> "Somatoform disorders are mental illnesses that cause bodily symptoms, including pain. The symptoms can't be traced back to any physical cause. And they are not the result of substance abuse or another mental illness. People with somatoform disorders are not faking their symptoms." - WebMD

If you fork this repo, you must run `npm install`, `mongod`, `mongo`, and `gulp` in order for this app to function properly.

[ Visit SomatiColors on Heroku ](http://somaticolors.herokuapp.com/)

-

### Technologies Used

* Node.js
* Express
* MongoDB + Mongoose
* AngularJS
* NodeMailer
* Gulp
* Bootstrap + Angular UI + Custom CSS/Sass
* Adobe Creative Cloud (Photoshop & Illustrator)

-

#### Screenshots

![ SomatiColors Screenshot ](readme/landing.png)
![ SomatiColors Screenshot ](readme/timeline.png)
![ SomatiColors Screenshot ](readme/settings.png)

-

#### User Stories

| (Role) As a .. | (Goal) I want to.. |
|----------------|--------------------|
| User | Log In |
| User | Create an account |
| User | Update my account settings |
| User | Delete my account and timeline events |
| User | Add my mental health psychian's email address so I can emails events straight to their inbox |
| User | Customize my emotional color pallete |
| User | Create/Edit/Delete an event | Track emotions/bodily sensations |
| User | Visualize event/situation emotions by creating a color stripe to the left of each timeline entry |
| User | Visualize event/situation bodily sensations by marking an image of a body based on checkbox values |
| Visitor | Learn more about SomatiColors on the about page |

-

#### ERD

![ SomatiColors ERD ](readme/erd.jpg)

##### User Model
``` username, password, first_name, last_name, email, mental_health_physician, physician_email```

##### Event Model
``` title, date, location, people_involved, situation, triggers, bodily_sensations, emotion, automatic_thoughts, rational_response, behaviors, consequences, challenged_beliefs, lesson, old_perspective, new_perspective, coping_strategies, user_id ```

-

#### Wireframes

![ SomatiColors Wireframe ](readme/wf01.png)
![ SomatiColors Wireframe ](readme/wf02.png)
![ SomatiColors Wireframe ](readme/wf03.png)
