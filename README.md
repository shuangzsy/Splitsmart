# Splitsmart

A Splitwise clone for friends to split costs between friends and family members.

# Development
# 1. Overview
Users can record a expense split between themselves and another user, choosing who make the initial payment. The expense is recorded for both users, and a running balance is calculated and displayed. A user can view expenses and splits between another user, as well as between all their expenses and friends. Expenses can also be deleted and can only be viewed by those involved.


# Schema
Schema is created in a very flexible way, which enable the uers to split with mutiple users and using defferent splits way.
## expenses

| column name   | data type | details               |
|---------------|-----------|-----------------------|
| id            | integer   | not null, primary key |
| description   | text    | not null                      |
| total_amount | float   | not null              |
| creator_id    | integer    | not null, indexed,foreign key |
| create_date   | date      | not null                      |
| group_name        | string | indexed                       |
| settled      | boolean   |not null|
| created_at      | datetime  | not null                      |
| updated_at      | datetime  |  not null                     |

* creator_id references users
* index on creator_id
* index on group_name

# Functionality
User can click the Add Expense button to add an expense. Input the user's email used for splitsmart, description of the expense, total amount of that expense,
Group input is optional. If this expense paied by user's friend, user can enter the total amount with negative value
![Screen Shot 2021-12-06 at 6 32 11 PM](https://user-images.githubusercontent.com/72324311/144955478-0ba2e4a1-b843-4fbe-a591-d5a3982a2815.png)

These are the split information from all the expenses under current user.
![Screen Shot 2021-12-06 at 6 32 20 PM](https://user-images.githubusercontent.com/72324311/144955500-83d4f80f-80f3-48cf-83ae-b0e73ced0aca.png)

These are all expenses under current user. User can clict all expense link from Dashboard page.
![Screen Shot 2021-12-06 at 6 32 28 PM](https://user-images.githubusercontent.com/72324311/144955507-88420007-c445-495d-9a40-507f1b92efe2.png)


# Futures

## Current features
* User auth
* Demo user
* Add expenses and split evenly or paied all by one party
* All expenses details show page
* User activities


## Future features
* add mutiple user in a expense
* have mutiple split options (customized the split percentage)

