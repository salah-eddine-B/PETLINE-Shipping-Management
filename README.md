# PETLINE Shipping Management

A comprehensive shipping and inventory management system for PETLINE, designed to streamline product management, shipment tracking, and client interactions.

## Features

### Product Management
- Add, edit, and delete products
- Track product quantities and prices
- Monitor low stock levels
- View product history

### Shipment Management
- Create and manage outgoing shipments
- Track shipment status and details
- Generate shipment reports
- Monitor client shipments

### Client Management
- Track client information
- View client shipment history
- Manage client relationships

### Dashboard
- Real-time statistics and metrics
- Quick overview of total products, clients, and shipments
- Recent shipment tracking
- Low stock alerts
- Revenue monitoring

## Technical Stack

### Frontend
- React.js
- Redux for state management
- Modern UI components
- Responsive design

### Backend
- Node.js
- Express.js
- JSON-based data storage
- RESTful API endpoints

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Start the development servers:
   ```bash
   # Start backend server
   cd backend
   npm start

   # Start frontend server
   cd ../client
   npm start
   ```

4. Access the application at `http://localhost:3000`

## Project Structure

```
petline-shipping-management/
├── backend/              # Backend server
│   ├── index.js         # Main server file
│   ├── Products.json    # Product data
│   └── Shipments.json   # Shipment data
│
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/      # Page components
│   │   └── store/      # Redux store
│   └── public/         # Static assets
│
└── README.md           # Project documentation
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 