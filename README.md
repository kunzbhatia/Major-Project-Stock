# Table of content

•	Project goal

•	Summary

•	Application architecture

•	Class diagram for backend

•	Django RESTFramework Endpoints

•	React Components

•	Snapshots

•	Video and Code links

•	Future scopes

•	Resources



# Project Goal

The aim of this project is to offer a platform for stock market enthusiasts to hone their investment skills by providing a risk-free environment for experimentation. Through this platform, users can learn how to manage a portfolio with multiple positions and make informed investment decisions. This simulation offers users a chance to experience real-world market scenarios without the risk of losing actual money, providing a safe and engaging learning environment. Ultimately, this project aims to empower users with the knowledge and confidence to make sound investment decisions in the actual stock market.

# Summary 

This project is an interactive virtual platform that offers users the opportunity to learn and practice investing in the stock market without the risk of losing real money. Through this engaging game, players can simulate a stock market environment, buying and selling stocks, and managing a virtual investment portfolio.
At the beginning of the game, players are allocated a virtual budget or set amount of virtual money, which they can use to purchase stocks from a wide range of companies listed on the virtual stock market. They can then monitor the performance of their investments over time, with the game tracking real-world stock market data and news to simulate the stock market environment accurately.
Players can even compete against each other in clans, with the objective of achieving the highest portfolio value at the end of the game. The game provides players with a risk-free and realistic experience of the stock market, enabling them to experiment with different investment strategies, learn how to read stock market charts and news, and develop a better understanding of the risks and rewards of investing in stocks.
Overall, this virtual stock market simulation game provides novice investors with an immersive and practical way to learn about the stock market and investment strategies, without risking their own money. It is a valuable tool for anyone looking to develop their investment skills and build their confidence as an investor.

# Application architecture: 

As the user comes to the web app, on the homepage, she can see an onboarding message with all the features listed there. A new user needs to register first of all with her name, email-id and password. Once created, the user can now login to her account. 
Initially, the user is given cash of $ 1000000. The user has the freedom of playing with this money and experimenting by buying and selling various stocks from the market. The market page consists of a number of available stocks. The user can also see the graphs for various tickers by clicking on the icon. All the tickers have unique buy and sell buttons for each of them.  Clicking on any such button would open up a modal that prompts the user to enter the quantity. Finally, by clicking on the buy/sell button, the trade would be executed. It would be displayed in the order history of the user on the portfolio page, the holdings of that particular stock would be modified, the cash would be updated and the corresponding profit would be displayed. If the user tries to sell more number of stocks than she owns, she would be prompted by an invalid trade. 

![image](https://user-images.githubusercontent.com/99636505/227787663-c869de8d-cb8f-4195-9456-992c4d44b3ec.png)

Once the cash limit is exhausted, no further trades can be executed.
We have tried implementing the automatic sell feature which is very crude as of now but if the profit becomes say 1%(currently non-configurable), all the holdings of the user would be sold out to book the profit. Similarly, if there is a 0.5% decrease in the price of any stock, some fixed quantity would be bought automatically.

# Class diagram for backend

![image](https://user-images.githubusercontent.com/99636505/227787642-f676c20d-b577-4e00-8658-cd9bf40feba2.png)

# Django RESTFRAMEWORK endpoints
Here are the endpoints: <br/>
•	/buyStock: This endpoint is used to buy a stock. <br/>
•	/sellStock: This endpoint is used to sell a stock. <br/>
•	/getHoldings: This endpoint is used to get the holdings of a user. <br/>
•	/getStockTransactions: This endpoint is used to get the stock transactions of a user. <br/>
•	/getBalance: This endpoint is used to get the balance of a user. <br/>
•	/register/: This endpoint is used to register a new user. <br/>
•	/login/: This endpoint is used to log in an existing user. <br/>
•	/profile/: This endpoint is used to view the profile of a user. <br/>
•	/changepassword/: This endpoint is used to change the password of a user. <br/>
•	/send-reset-password-email/: This endpoint is used to send a password reset email to a user. <br/>
•	/reset-password/<uid>/<token>/: This endpoint is used to reset the password of a user. <br/>

# REACT COMPONENTS
Here are the endpoints: <br/>
•	/ : This is the homepage component <br/>
•	/LogIn: This is the login page component<br/>
•	/Register: This is the signup component that would help a new user register herself on the app<br/>
•	/Market: This is the component that is fetching data from the external API, and also sending data to the backend using axios<br/>
•	/Portfolio: This component is fetching order history, holdings, cash and profit data from the backend and displaying it in a formatted way<br/>

# SNAPSHOTS

Home page:
 
![image](https://user-images.githubusercontent.com/99636505/227787373-ef2e20f5-8694-426a-a33b-ee6a5a1484a0.png)

![image](https://user-images.githubusercontent.com/99636505/227787382-05d11319-a43d-4cc8-9d81-f91e32a2d89e.png)

![image](https://user-images.githubusercontent.com/99636505/227787390-3f06c72d-53b1-49d6-841c-f95dbaee9704.png) 

Sign-up page:

![image](https://user-images.githubusercontent.com/99636505/227787406-d4160929-ccee-4487-93ef-c28aae9f64c5.png)

Filling in the information:

![image](https://user-images.githubusercontent.com/99636505/227787417-1c3e08e3-c54f-4234-a451-3a0bbd43d5cf.png)

Login page:

![image](https://user-images.githubusercontent.com/99636505/227787437-3e43723b-7249-4b4d-a934-653f67336f8a.png)
 
Initial portfolio status:

![image](https://user-images.githubusercontent.com/99636505/227787458-53057a0c-b622-43d1-921f-f76a5f1d549c.png)

Market page:

![image](https://user-images.githubusercontent.com/99636505/227787474-2490b24f-2802-4c40-b1b4-227200958e37.png)

Graph:

![image](https://user-images.githubusercontent.com/99636505/227787502-cb15ed61-784c-400c-9f2c-d79d76dea702.png)

Buying stocks:

![image](https://user-images.githubusercontent.com/99636505/227787518-c6d6a4c5-459c-42d7-82d0-ac0475a0f6c5.png)

Updated holdings, order history, cash and profit:

![image](https://user-images.githubusercontent.com/99636505/227787531-d9e7c34b-9412-4c0a-882f-44aa0d73272b.png)

![image](https://user-images.githubusercontent.com/99636505/227787548-72ecd34e-5403-4886-9372-a56191d5b867.png)

![image](https://user-images.githubusercontent.com/99636505/227787560-030c8823-9ae8-43fd-9bf7-26b7c4bf9701.png)

Logout modal:

![image](https://user-images.githubusercontent.com/99636505/227787588-71204b1d-f7b7-4bf4-abcc-3886100c571a.png)

# Video of the working app:

https://drive.google.com/file/d/10GITcb21ocsYPPB2Y8xurzsWG5ft8mpK/view?usp=share_link

# Github Repository Link:

https://github.com/Stockify-Developers/Stockify

# Future scopes

•	We can include other tradable entities like options, futures, bonds, and even IPOs ( primary market ).<br/>
•	Currently, we have 12 stocks in the user watchlist but we can implement the “search stock” with all listed stocks.<br/>
•	Currently, we have tried to implement a non-configurable automatic trading system but we can make it modular by allowing the user to decide the profit and price change threshold.<br/>
•	The final version of the app fetches data from the external API every second, we can develop an algorithm on our end that takes in data every morning and manipulates it based on the user activity.<br/>
•	We can also implement the stop-loss feature that sells off stocks if the loss is going above a threshold.<br/>
•	We can plot graphs on our end and have different types of indicators and geeks.<br/>

# RESOURCES:

https://www.youtube.com/watch?v=lo7lBD9ynVc

https://www.youtube.com/watch?v=z-RqOU9OCb8

https://codepen.io/florantara/pen/dROvdb

https://codepen.io/AdityaTiwari/pen/ZExjbwJ

https://elements.envato.com/

https://undraw.co/

https://unsplash.com/

https://iexcloud.io/docs/core/QUOTE

