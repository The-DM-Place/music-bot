# Discord Bot Template

A Discord.js v14 bot template with application management system.

## Features

- Slash commands
- Button interactions
- Select menus
- Modal forms
- Application management system
- Database integration (synz-db)
- Event handling
- Custom logger

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file:
```env
TOKEN=your_bot_token_here
```

3. Start the bot:
```bash
npm start
```

## Structure

- `commands/` - Slash commands
- `events/` - Event handlers
- `interactions/buttons/` - Button handlers
- `interactions/menus/` - Select menu handlers
- `interactions/modals/` - Modal handlers
- `models/` - Database schemas
- `utils/` - Utility functions

## Requirements

- Node.js 16.11.0 or higher
- Discord bot token

## License

MIT