# Project 3: Tech Stack: A React Native Redux Primer.

Built while following along: [The Complete React Native and Redux Course](https://www.udemy.com/the-complete-react-native-and-redux-course) by Stephen Grider. 

## What does it do?

The "completed" app will display a simple list of popular React related code Libraries. When the user taps on one of the list items, a small animation will display some text that describes that library.

## Here's a few notes that I took mid-project:

* The files that we create to implement Redux are extremely simplified and basic. 
* I like this because he’s really focusing on the utility of each part of the system at it’s most basic form.
* All of his diagrams are created to show you how the data flows through the redux system. 
* It's a tough thing to explain and Grider includes a ton of diagrams to help visualize how it all works together.

* He Addresses how the `.map` function would fail to render large lists of components on a mobile device, where memory and cell signal have more of an effect on performance than it does on a browser.
* He introduces the **FlatList** component, which I thought was impressive. It resolves this memory problem by selectively rendering only the data that would fit within that user's mobile viewport as they scroll the list. 

* **There were a few errors that I ran into that weren't officially addressed in the course:**
    * Within the keyExtractor attribute in the FlatList component, a `.toString()` function was needed in order to clear the *“expected a String, but got a Number”* error.
    * In the ListItem component, Grider used `{this.props.library.title}` to display the Library name within the JSX, which worked fine for him, but resulted in a list of empty boxes without any text for me. 
    * The library object actually needs an “item” key to be referenced in order to access the title like so: 
    `{this.props.library.item.title}`. 
    * **This is a huge bug** that should be officially addressed as we constantly reference the library data from that point onwards.
    * Thankfully, both of these issues were discussed and resolved in the course Q&A, so kudos to that community.

* I didn’t know about the `ownProps` functionality on mapStateToProps. This is *super useful* for pulling out logic from the main component code. 
* The animations that React Native has “out-of-the-box” are awesome. We used the `LayoutAnimation.Spring()` method in conjunction with the DidMount lifecycle method for an awesome UX effect, with very little effort.


## Final thoughts: 

Implementing Redux within React Native isn't that different than using it on a web-based React app. 

What really stood out to me was how Grider used the `mapStateToProps` function to extract some logic out of the component. When I first learned about Redux, I would keep all the logic within my action creators, so this is new to me. 

*Have I been doing it the wrong way this whole time??* 

Haha, I've still got *a ton* of learning to do, and seeing how others manage their code and understanding their reasoning behind their decisions is always fascinating to me.

The next project is the last (and most complex) in this course. I'm excited to dive right into it tomorrow morning. 
