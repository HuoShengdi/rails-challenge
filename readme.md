
# Grain Challenge

Grain is an online food delivery company that manages the whole end-to-end customer experience. We maintain control over every part of the supply chain from the cooking to ordering to delivery to achieve a great customer experience. [https://grain.com.sg]()

## What is the problem?

We belive that feedbacks are a treasure trove of value, every customers voice is encapsulated in a single response that contains very actionable suggestions and also hidden behaviours we should be deciphering.
We want to collect all data about each meal and also the delivery service.


## What you need to build!
You will be required to think about how we can collect each meal feedback and delivery service feedback for every order.
Using this project boiler plate, create a meal feedback system that can help capture the above data points.

Scenario:

1. Given user visits the order feedback url, she should be able to give a rating for each order_items
  - Feedback can be in the form of 🌟🌟🌟🌟🌟 or 👎👍 or 🎉🎉🎉  or ❤️❤️❤️ (if you have a better alternative, feel free to implement and tell us why)

1. User should be able to give a rating for the delivery (same as meals ideally so the interaction is consistent)
1. User should be able to input a comment on each feedback (or you can think beyond free form text and think of quick select tags, make the case)
1. User should not be able to submit a feedback for the same order again

## Evaluation Setup

1. Fork this repo
1. `bundle install`
1. `npm install`
1. `webpack`
1. `rails s`
1. Visit [http://localhost:3000/order/123/feedback]() to get started
