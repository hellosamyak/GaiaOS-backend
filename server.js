const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
// Use the port provided by Render's environment, or 3000 for local development.
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Mock data to be served
const mockData = {
  wallet: {
    current: {
      bill: 1500,
      kwh: 250,
      sourceMix: {
        coal: 70,
        solar: 20,
        wind: 10
      },
      energyScore: 75,
      greenCoins: 500
    },
    history: [
      { month: 'Jan', kwh: 220 },
      { month: 'Feb', kwh: 240 },
      { month: 'Mar', kwh: 210 },
      { month: 'Apr', kwh: 280 },
      { month: 'May', kwh: 250 },
      { month: 'Jun', kwh: 230 }
    ]
  },
  copilot: [
    {
      title: 'Shift EV charging to midnight',
      tip: 'Charge your electric vehicle during off-peak hours to save money and reduce grid strain.',
      savings: 50,
      co2Reduction: 40,
    },
    {
      title: 'Run washing machine on a sunny day',
      tip: 'Use your washing machine when solar energy production is high to save costs and be greener.',
      savings: 25,
      co2Reduction: 20,
    },
    {
      title: 'Set smart lighting schedules',
      tip: 'Automate your home lighting to turn on and off based on natural light levels, reducing waste.',
      savings: 15,
      co2Reduction: 10,
    },
    {
      title: 'Lower AC temperature slightly',
      tip: 'Adjust your thermostat by just a few degrees to significantly impact your energy consumption.',
      savings: 75,
      co2Reduction: 35,
    },
    {
      title: 'Use dishwasher during peak solar hours',
      tip: 'Run your dishwasher between 11 AM and 3 PM when solar generation is highest.',
      savings: 30,
      co2Reduction: 25,
    },
    {
      title: 'Switch to LED bulbs',
      tip: 'Replace remaining incandescent bulbs with LEDs to reduce energy consumption by 80%.',
      savings: 45,
      co2Reduction: 30,
    },
    {
      title: 'Unplug vampire devices',
      tip: 'Disconnect electronics in standby mode that consume power even when not in active use.',
      savings: 35,
      co2Reduction: 18,
    },
    {
      title: 'Optimize water heater temperature',
      tip: 'Set your water heater to 120°F (49°C) instead of the default 140°F to save energy.',
      savings: 60,
      co2Reduction: 45,
    },
    {
      title: 'Use ceiling fans with AC',
      tip: 'Run ceiling fans to circulate air, allowing you to set the AC 2-3 degrees higher.',
      savings: 40,
      co2Reduction: 28,
    },
    {
      title: 'Seal air leaks around windows',
      tip: 'Use weatherstripping or caulk to prevent conditioned air from escaping your home.',
      savings: 85,
      co2Reduction: 55,
    },
    {
      title: 'Schedule pool pump for off-peak hours',
      tip: 'Run your pool pump during late night or early morning hours when electricity is cheaper.',
      savings: 70,
      co2Reduction: 35,
    },
    {
      title: 'Use cold water for laundry',
      tip: 'Wash clothes in cold water to reduce energy consumption by up to 90% per load.',
      savings: 20,
      co2Reduction: 15,
    },
    {
      title: 'Enable power management on computers',
      tip: 'Set computers to hibernate or sleep mode when inactive to reduce standby consumption.',
      savings: 25,
      co2Reduction: 12,
    },
    {
      title: 'Install a programmable thermostat',
      tip: 'Automatically adjust temperature when away from home to optimize energy usage.',
      savings: 90,
      co2Reduction: 65,
    },
    {
      title: 'Use microwave instead of oven',
      tip: 'Reheat small portions in the microwave rather than the conventional oven.',
      savings: 18,
      co2Reduction: 8,
    },
    {
      title: 'Clean refrigerator coils monthly',
      tip: 'Keep condenser coils dust-free to maintain refrigerator efficiency.',
      savings: 30,
      co2Reduction: 22,
    },
    {
      title: 'Upgrade to ENERGY STAR appliances',
      tip: 'Replace old appliances with ENERGY STAR certified models for maximum efficiency.',
      savings: 120,
      co2Reduction: 85,
    },
    {
      title: 'Use natural lighting during day',
      tip: 'Open curtains and blinds to maximize natural light and reduce artificial lighting needs.',
      savings: 22,
      co2Reduction: 15,
    },
    {
      title: 'Insulate hot water pipes',
      tip: 'Wrap hot water pipes with insulation to reduce heat loss during water transport.',
      savings: 35,
      co2Reduction: 25,
    },
    {
      title: 'Set refrigerator to optimal temperature',
      tip: 'Keep your fridge at 37-38°F and freezer at 0-5°F for optimal energy efficiency.',
      savings: 28,
      co2Reduction: 20,
    },
    {
      title: 'Use smart power strips',
      tip: 'Install smart power strips that automatically cut power to devices in standby mode.',
      savings: 42,
      co2Reduction: 30,
    },
    {
      title: 'Plant shade trees strategically',
      tip: 'Plant deciduous trees on the south side of your home to provide summer shade.',
      savings: 95,
      co2Reduction: 70,
    },
    {
      title: 'Use bathroom exhaust fans efficiently',
      tip: 'Run exhaust fans for only 15-20 minutes after showers to remove humidity.',
      savings: 12,
      co2Reduction: 8,
    },
    {
      title: 'Optimize dryer lint cleaning',
      tip: 'Clean dryer lint filter after every load and vent annually for maximum efficiency.',
      savings: 25,
      co2Reduction: 18,
    },
    {
      title: 'Use window coverings strategically',
      tip: 'Close blinds during hot days and open them during cold days to regulate temperature.',
      savings: 38,
      co2Reduction: 25,
    },
    {
      title: 'Schedule water heating during solar peak',
      tip: 'Heat water during peak solar hours (10 AM - 2 PM) to use renewable energy.',
      savings: 55,
      co2Reduction: 40,
    },
    {
      title: 'Use laptop instead of desktop',
      tip: 'Laptops consume 50-80% less energy than desktop computers for similar tasks.',
      savings: 35,
      co2Reduction: 25,
    },
    {
      title: 'Enable eco-mode on appliances',
      tip: 'Use energy-saving modes on dishwashers, washing machines, and other smart appliances.',
      savings: 32,
      co2Reduction: 22,
    },
    {
      title: 'Install motion sensor lights',
      tip: 'Use motion sensors for outdoor and basement lighting to eliminate waste from forgotten lights.',
      savings: 28,
      co2Reduction: 18,
    },
    {
      title: 'Optimize TV settings for efficiency',
      tip: 'Reduce TV brightness and enable power-saving mode to cut energy consumption by 30%.',
      savings: 24,
      co2Reduction: 15,
    },
    {
      title: 'Use space heaters efficiently',
      tip: 'Heat only occupied rooms with efficient space heaters instead of whole-house heating.',
      savings: 65,
      co2Reduction: 45,
    },
    {
      title: 'Maintain HVAC filters monthly',
      tip: 'Replace or clean HVAC filters monthly to maintain optimal system efficiency.',
      savings: 48,
      co2Reduction: 35,
    },
    {
      title: 'Use smart irrigation systems',
      tip: 'Water gardens during cooler hours and use soil moisture sensors to avoid overwatering.',
      savings: 40,
      co2Reduction: 20,
    },
    {
      title: 'Cook with lids on pots',
      tip: 'Use lids while cooking to reduce cooking time and energy consumption by 25%.',
      savings: 15,
      co2Reduction: 10,
    },
    {
      title: 'Install attic insulation',
      tip: 'Add or upgrade attic insulation to R-38 or higher to reduce heating and cooling loads.',
      savings: 110,
      co2Reduction: 80,
    },
    {
      title: 'Use electric kettle for hot water',
      tip: 'Boil water in an electric kettle rather than on the stovetop for better efficiency.',
      savings: 12,
      co2Reduction: 8,
    },
    {
      title: 'Enable sleep mode on gaming consoles',
      tip: 'Put gaming consoles in sleep mode instead of leaving them on standby.',
      savings: 35,
      co2Reduction: 22,
    },
    {
      title: 'Use solar garden lighting',
      tip: 'Replace traditional outdoor lighting with solar-powered alternatives.',
      savings: 45,
      co2Reduction: 30,
    },
    {
      title: 'Optimize home office setup',
      tip: 'Use a monitor\'s auto-brightness and enable sleep modes for all office equipment.',
      savings: 30,
      co2Reduction: 20,
    },
    {
      title: 'Install low-flow showerheads',
      tip: 'Reduce hot water usage with efficient showerheads while maintaining water pressure.',
      savings: 52,
      co2Reduction: 35,
    },
    {
      title: 'Use thermal curtains in winter',
      tip: 'Install thermal curtains to reduce heat loss through windows by up to 25%.',
      savings: 60,
      co2Reduction: 40,
    },
    {
      title: 'Clean air conditioner coils',
      tip: 'Clean AC evaporator and condenser coils annually to maintain peak efficiency.',
      savings: 38,
      co2Reduction: 28,
    },
    {
      title: 'Use induction cooking when possible',
      tip: 'Induction cooktops are 85-90% efficient compared to 40-55% for gas burners.',
      savings: 35,
      co2Reduction: 25,
    },
    {
      title: 'Install a smart water heater',
      tip: 'Upgrade to a smart water heater that learns usage patterns and optimizes heating cycles.',
      savings: 85,
      co2Reduction: 60,
    },
    {
      title: 'Use double-pane windows',
      tip: 'Upgrade single-pane windows to double-pane for better insulation and energy savings.',
      savings: 95,
      co2Reduction: 65,
    },
    {
      title: 'Optimize freezer organization',
      tip: 'Keep freezers 75% full and organize items for better air circulation and efficiency.',
      savings: 20,
      co2Reduction: 15,
    },
    {
      title: 'Use battery-powered tools',
      tip: 'Choose efficient battery-powered tools over corded alternatives when possible.',
      savings: 18,
      co2Reduction: 12,
    },
    {
      title: 'Install ceiling insulation',
      tip: 'Add reflective insulation in the attic to reduce heat gain in summer.',
      savings: 70,
      co2Reduction: 50,
    },
    {
      title: 'Use smart sprinkler controllers',
      tip: 'Install weather-based irrigation controllers that adjust watering based on conditions.',
      savings: 55,
      co2Reduction: 25,
    },
    {
      title: 'Enable printer sleep modes',
      tip: 'Set printers and scanners to automatically enter sleep mode when not in use.',
      savings: 15,
      co2Reduction: 10,
    },
    {
      title: 'Use zone heating and cooling',
      tip: 'Install dampers in ductwork to heat or cool only occupied areas of your home.',
      savings: 80,
      co2Reduction: 55,
    },
    {
      title: 'Optimize electric vehicle charging',
      tip: 'Use smart charging to automatically charge your EV when electricity rates are lowest.',
      savings: 75,
      co2Reduction: 50,
    },
    {
      title: 'Install heat pump water heater',
      tip: 'Upgrade to a heat pump water heater for 2-3x better efficiency than conventional models.',
      savings: 140,
      co2Reduction: 100,
    }
  ],
  arLens: {
    appliances: [
      {
        name: "Refrigerator",
        photoUrl: "https://images.unsplash.com/photo-1721613877687-c9099b698faa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        costPerDay: 30,
        kwhPerDay: 2.0,
        co2PerDay: 0.5
      },
      {
        name: "Washing Machine",
        photoUrl: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        costPerDay: 45,
        kwhPerDay: 3.5,
        co2PerDay: 0.8
      },
      {
        name: "Smart Speaker",
        photoUrl: "https://images.unsplash.com/photo-1517756548657-b2c24162e63d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        costPerDay: 5,
        kwhPerDay: 0.2,
        co2PerDay: 0.05
      },
      {
        name: "Laptop",
        photoUrl: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        costPerDay: 15,
        kwhPerDay: 0.8,
        co2PerDay: 0.15
      }
    ]
  },
  blockchain: {
    leaderboard: [
      { rank: 1, society: 'Sunlight Towers', savings: '₹12k' },
      { rank: 2, society: 'Eco-Vista Apartments', savings: '₹9.5k' },
      { rank: 3, society: 'Green Haven Society', savings: '₹8k' },
      { rank: 4, society: 'Solar Oasis Complex', savings: '₹7.2k' },
      { rank: 5, society: 'Windmill Residences', savings: '₹6k' }
    ],
    recentTrades: [
      { seller: 'House 42', buyer: 'EV Station', kwhTraded: 2.5 },
      { seller: 'House 11', buyer: 'Neighborhood Center', kwhTraded: 1.8 },
      { seller: 'House 73', buyer: 'Local School', kwhTraded: 3.1 },
      { seller: 'House 5', buyer: 'EV Station', kwhTraded: 4.2 }
    ]
  }
};

// API Endpoints
app.get('/', (req, res) => {
  res.send('GaiaOS Backend is running!');
});

app.get('/api/wallet', (req, res) => {
  res.json(mockData.wallet);
});

app.get('/api/copilot', (req, res) => {
  const randomTip = mockData.copilot[Math.floor(Math.random() * mockData.copilot.length)];
  res.json(randomTip);
});

app.get('/api/ar-lens', (req, res) => {
  res.json(mockData.arLens);
});

app.get('/api/blockchain', (req, res) => {
  res.json(mockData.blockchain);
});

app.post('/api/trade', (req, res) => {
  // In a real app, this would process the transaction.
  // Here, we just return a mock success message.
  console.log('Received trade request:', req.body);
  res.json({ message: 'Trade successful!', transactionId: 'TXN-' + Date.now() });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
