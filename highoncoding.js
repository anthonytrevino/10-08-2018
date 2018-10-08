let containerName = document.getElementById("container")

let navigation = document.createElement("div")
navigation.id ="nav"

let title = document.createElement("h1")
title.textContent = "High On Coding"

let home = document.createElement("h2")
home.textContent = "Home"

let categories = document.createElement("h2")
categories.textContent = "Categories"

navigation.append(title)
navigation.append(home)
navigation.append(categories)
containerName.append(navigation)



let pageBody = document.createElement("div")
containerName.append(pageBody)
pageBody.id = "pageBody"

let postOne = document.createElement("div")
postOne.textContent = "The Curse of the Current Reviews When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews."
pageBody.append(postOne)

let postTwo = document.createElement("div")
postTwo.textContent = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch."
pageBody.append(postTwo)

let postThree = document.createElement("div")
postThree.textContent = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started."
pageBody.append(postThree)
