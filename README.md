# Arbitrum Builder Pods

A four-page Web3 learning website created for the Arbitrum Builder Labs by LamprosDAO assignment.

This website explains basic Web3 concepts, introduces Arbitrum as a Layer 2 solution, shows live cryptocurrency prices, and includes an interactive block mining simulator.

## Pages

### 1. Home / Landing Page
Introduces the website theme and explains why Ethereum needs Layer 2 solutions.

It includes:
- Web3 introduction
- Arbitrum overview
- Benefits of Layer 2
- Website navigation

### 2. Concepts Page
Shows visual comparison cards for important Web3 concepts.

Concepts covered:
- Web2 vs Web3
- Ethereum vs Bitcoin
- Public Key vs Private Key
- Blockchain vs Traditional Database

### 3. Live Prices Page
Fetches live cryptocurrency prices using the CoinGecko API.

It displays:
- Bitcoin price
- Ethereum price
- 24-hour price change
- Green or red indicator based on price movement
- Refresh button

### 4. Block Simulator Page
An interactive simulator that demonstrates how blockchain mining works.

It includes:
- Block data input
- Previous hash
- Nonce
- SHA-256 hash generation
- Mining button
- Block valid / invalid status
- Chain breaking effect when Block 1 data changes

## Technologies Used

- HTML
- CSS
- JavaScript
- CoinGecko API
- Web Crypto API for SHA-256 hashing

## How to Run Locally

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in any web browser.
4. Use the navigation bar to visit all four pages.

No installation is required.

## Project Structure

```txt
arbitrum-builder-assignment/
├── index.html
├── concepts.html
├── prices.html
├── simulator.html
├── style.css
├── prices.js
├── simulator.js
└── README.md

## Created by: Harsh Dhankecha
GitHub: https://github.com/harsh-501
Batch: 5 G-2
