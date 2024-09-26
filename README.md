# Stockify: Virtual Stock Market Simulation

## Project Overview

### Project Goal
Stockify is a virtual stock market simulation platform designed to help users practice trading without financial risk, enhancing their investment skills in a safe environment.

### Summary
This interactive web application allows users to simulate real stock market scenarios. Users start with a virtual budget of Rs.1,000,000 and can buy/sell stocks, manage their portfolio, and compete in clans. The platform uses real-time market data and offers insights into investment strategies.

### Application Architecture
The application uses Django for backend REST API endpoints and React for the frontend. Users register, login, manage their portfolio, and execute trades via intuitive interfaces.

### Django REST Framework Endpoints
Key endpoints include:
- `/buyStock`: Buy a stock.
- `/sellStock`: Sell a stock.
- `/getHoldings`: Retrieve user holdings.
- `/getStockTransactions`: Fetch user transaction history.
- `/getBalance`: Get user account balance.
- `/register`, `/login`, `/profile`: User authentication and profile management.
- `/changepassword`, `/send-reset-password-email`, `/reset-password`: Password management.

### React Components
- **Home**: Displays project overview and features.
- **LogIn/Register**: Authentication pages for user access.
- **Market**: Displays available stocks, allows buying/selling.
- **Portfolio**: Shows user holdings, transaction history, and current balance.

### Snapshots
#### Home Page
![Home Page](https://user-images.githubusercontent.com/99636505/227787373-ef2e20f5-8694-426a-a33b-ee6a5a1484a0.png)

#### Signup/Login Page
![Signup Page](https://user-images.githubusercontent.com/99636505/227787406-d4160929-ccee-4487-93ef-c28aae9f64c5.png)

#### Portfolio Snapshot
![Portfolio Snapshot](https://user-images.githubusercontent.com/99636505/227787458-53057a0c-b622-43d1-921f-f76a5f1d549c.png)

#### Market Page
![Market Page](https://user-images.githubusercontent.com/99636505/227787474-2490b24f-2802-4c40-b1b4-227200958e37.png)

#### Graph Example
![Graph Example](https://user-images.githubusercontent.com/99636505/227787502-cb15ed61-784c-400c-9f2c-d79d76dea702.png)

#### Buying Stocks
![Buying Stocks](https://user-images.githubusercontent.com/99636505/227787518-c6d6a4c5-459c-42d7-82d0-ac0475a0f6c5.png)

#### Updated Holdings and Order History
![Updated Holdings](https://user-images.githubusercontent.com/99636505/227787531-d9e7c34b-9412-4c0a-882f-44aa0d73272b.png)

#### Logout Modal
![Logout Modal](https://user-images.githubusercontent.com/99636505/227787588-71204b1d-f7b7-4bf4-abcc-3886100c571a.png)

### Future Scopes
- Implement options, futures, IPOs, and expanded stock search.
- Enhance automatic trading system, incorporate data algorithms.
- Introduce stop-loss features and advanced charting with indicators.
- Planned future enhancements include PostgreSQL integration, machine learning models (LSTM, Prophet) for stock market prediction, and data visualization dashboards using Power BI.

### Resources
- YouTube tutorials, code examples, design assets, and API documentation.

### Contributors
- **Kunal Bhatia**
- **Siddhesh Kirdat**
- **Abhimanyu Kapoor**
