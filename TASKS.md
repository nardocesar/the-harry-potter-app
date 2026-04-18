# Harry Potter App Implementation Tasks

## 1. Project Setup & Architecture

- [x] Next.js project initialized with TypeScript
- [x] Set up project structure:
  ```
  src/
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx
    │   │   ├── Navigation.tsx
    │   │   └── Layout.tsx
    │   ├── characters/
    │   │   ├── CharacterCard.tsx
    │   │   ├── CharacterList.tsx
    │   │   └── CharacterDetail.tsx
    │   └── common/
    │       ├── HouseSelector.tsx
    │       └── FavoriteButton.tsx
    ├── types/
    │   └── api.ts
    ├── services/
    │   └── api.ts
    └── hooks/
        ├── useCharacters.ts
        └── useFavorites.ts
  ```

## 2. API Integration

- [ ] Create types for API responses
- [x] Implement API service with following endpoints:
  - `/characters` (all characters)
  - `/characters/students` (students only)
  - `/characters/staff` (staff only)
- [ ] Add error handling and loading states

## 3. State Management

- [x] Create custom hooks for state management
- [x] Add context for global state

## 4. UI Components & Features

### Navigation

- [ ] Create responsive navigation bar
- [ ] Implement routing between views:
  - Home
  - All Characters
  - Students
  - Staff
  - Character Details

### Character Features

- [ ] Create character list view with filtering
- [ ] Implement character detail page
- [ ] Add favorite functionality
- [ ] Create house preference selector

### Styling

- [x] Define house-specific color schemes:
  ```
  Gryffindor: #740001, #D3A625
  Slytherin: #1A472A, #5D5D5D
  Hufflepuff: #FFD800, #000000
  Ravenclaw: #0E1A40, #946B2D
  ```
- [ ] Create responsive layouts

## 5. TypeScript Implementation

- [x] Define interfaces for all components
- [x] Create types for:
  - Character data
  - API responses
  - State management
  - Component props

## 7. Code Quality and Improvements

- [x] Set up ESLint rules
- [ ] Setup unit tests
- [ ] Add accessibility features

## Priority Order (4-hour timeframe)

1. Basic project structure and routing
2. API integration and type definitions
3. Character list and detail views
4. House preference and favorites functionality
5. Styling and responsive design
6. Polish and optimization (if time permits)

## Minimum Viable Product (MVP)

- Character list view
- Character detail view
- Basic navigation
- House preference selection
- Favorite character functionality
- Basic styling with house colors

Remember: Focus on core functionality first, then enhance the UI if time permits.
