---
title: Code Kata Pool Party
excerpt: As with any profession, training makes mastery, repetition is learning and challenges bring new levels of understanding. This is also applicable to software development and compared to most other professions, it is probably one of the easiest to develop. Anyone with a laptop and WiFi can write code and publish an app from absolutely anywhere, can we say the same about doctors, musicians or athletes? It is more difficult for them than it is for us, yet they practice.
---

> To improve yourself is to challenge yourself.

### Overview

As with any profession, training makes mastery, repetition is learning and challenges bring new levels of understanding. This is also applicable to software development and compared to most other professions, it is probably one of the easiest to develop. Anyone with a laptop and WiFi can write code and publish an app from absolutely anywhere, can we say the same about doctors, musicians or athletes? It is more difficult for them than it is for us, yet they practice.

We, as software developers, can do our job from literally anywhere, even while we are sitting on the toilet. There is no excuse for not having something similar to a laboratory to practice different medical procedures, or require an instrument to practice on (mind the crowd, practicing is not always spectacular and doing it in a plaza may not be great for people going out), or a gym that is not too crowded. We got our laptops, most coffee shops have free WiFi, if we can work from there then we can practice from there as well.

As software developers, our tools are versatile if not the most versatile. We use our laptops for almost anything, talking with friends, reading, watching a movie, working, studying, finding nice hotels when we plan our next vacation, and a lot of other things. We almost always have or can have our laptops with us.

There is really no excuse for not practicing, there is only “I do not want to practice”. This habit has long term benefits, we can do it every day or every two days or three days. It’s like going to the gym, we can have a similar schedule when it comes to practicing our software skills, all we have to do is create it and stick to it. We can do this first thing when we get into the office, spend some time doing a code kata, or just trying one. The purpose is not to complete each exercise, the purpose is to exercise. We can stay an extra 30 minutes at work and integrate this habit into our work environment, we don’t have to do it at home if we have a lot to do. We can integrate this in any point in our daily lives as long as we are comfortable with it.

### Goals

1. **Free Software**: This will be an application offered free of charge and with no user tracking. Costs need to be minimized as much as possible. We can host static websites (HTML, CSS, JavaScript that runs in the browser only) really cheap and really efficient (low latency even when there are a lot of users accessing the site, not to mention browser caching).

2. **Self Assessment Tool**: The purpose of the tool is to help developers self assess their work on small to medium tasks (code katas should not take a lot of time to complete). Rather than having a checking mechanism to tell if the developer actually completed the code kata “properly” (i.e.: adhering to best practices, writing tests, addressing code smells and so on) we rely on the developer to self assess their work. We offer details to each item on the checklist for completing a code kata in order to help assess that item (e.g.: for writing tests, has the main case been covered? Have alternative cases been identified? Are they tested? Are there tests when the method throws exceptions?). This will make the developer more conscious when evaluating their work, more attentive to how they do it and argumenting why they did things the way they did.

3. **Progress Tracking**: Each code kata is tracked and can be visualized in a dashboard. The emphasis should be on progress and not on completing the code kata perfectly each time. If we do not check all the items on the checklist it is ok, next time we will pay more attention to these details and we can visualize this progress within the app. We should focus on achieving something, not becoming perfectionists in code katas. The tools should help us become better developers, not perfectionistic developers. We should be good enough, even if that means not being perfect and code katas are a way to become or maintain being good enough.

4. **Open Source & Contribution**: The entire application is open source and all katas are stored in the repository. Each kata has its own file to avoid conflicts and anyone can contribute to any degree. Such as writing, suggesting and testing katas. It is a team effort where the team can be the entire software community and more. Anyone can have great ideas about katas and we would like to know about them.

5. **Profiles & Saves**: Since this will be a statically hosted app all the data is stored in local browser storage, which goes away when we change the machine or the browser. To address this we can import and export profiles (one at a time). A profile is for a person. Generally, each person has one profile that they can manage.

6. **Learning**: There already are a lot of learning platforms out there and this app should not focus on the learning path with tutorials and courses. We focus on training. You can take a painting class and then practice at home, what happens at home is what we want to address. The practicing part and less of the tutorials/courses part. This does not exclude tutorials altogether, we can have “quests” like tutorials for initiation on different tools (git, Webpack, dotnet CLI and others), but this should not become the focus of the app. We want to offer a place to practice.

7. **Kata Diversity**: This document mostly refers to katas as coding katas where this is not entirely true. The app started with the idea of coding katas as they are a topic that is touched in multiple books that explain the importance of practice. This is an important aspect we need to consider. On the other hand, katas are not only about coding, we want to have katas for anything related to software, from setting up a VM (e.g.: UI only configuration, PowerShell only configuration, Windows Command Line only if you’re feeling lucky), configuring a project in the command line to trying different programming techniques and paradigms (e.g.: BDD, TDD, Object Oriented, Functional and so on) and even modeling. Some katas may not even involve a PC or a Mac. Anything goes, from using to creating software.

### Specifications

* The application is statically hosted, we can use any front-end library or framework.
* All progress is saved in local storage with the option to import and export profiles.
* This software is free and open source, open to contributions of all forms.
* Progress tracking centered around being good enough and not around being perfect.
* The purpose is conscious self assessment and help become better.

### Milestones

1. **Base Camp**

   Getting all the configuration in place, basic profile management with import & export, having one or two katas and progress tracking on each. Checklist for completing a kata.

2. **Stretching Katas**

   We want to expand katas a lot more, we want to have different categories for katas, more information on their progress and get to at least 50 katas. The kata itself should be displayed more fancy than a wall of text, this includes pictures, code snippets, videos and anything else. This milestone is basically about making katas feel great and become better presented. It’s about making the entire training exercise more appealing.

3. **Questing for Katas**

   We can group some katas into quests where you need to complete each step in order to reach the end. They will generally build one on top of the other and would rather schedule katas over multiple days. If you want to do one kata per day then the quest will provide you with a kata each day until you complete the quest. You can also complete the entire quest in one day if you want to, we don’t impose limits on how you complete your training.

   With this milestone we also want to introduce a random kata challenge. You configure what you want more training for (e.g.: more JavaScript or Python) and  the application will provide you with a fresh kata to try your skills. This kata pool should be secret so it will be a bit more difficult for you to know what to expect, this somewhat simulates real world challenges as you don’t always know what you’re going to get. Once a challenge kata has been completed you can see it, it’s hidden for you until you complete it. The same kata may come up again after 30 days (configurable per profile), this is to avoid getting the same exercise over and over again.