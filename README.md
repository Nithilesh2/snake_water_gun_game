# Snake, Water, and Gun Game Web Application

## Overview

This web application implements the classic game of Snake, Water, and Gun. In this game, the user selects either Snake, Water, or Gun, and the bot (computer) also makes a random selection. The game follows the rules where Snake defeats Water, Water defeats Gun, and Gun defeats Snake. The first player to reach 10 points wins the game.

## Features

- **User Interaction**: Users can click on the icons representing Snake, Water, and Gun to make their selection.
- **Random Bot Selection**: The bot randomly selects one of Snake, Water, or Gun after the user makes their choice.
- **Scoring System**: Points are awarded based on the outcome of each round.
- **Winner Declaration**: The game declares the winner once a player reaches 10 points.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Usage

1. Click on the icon representing Snake, Water, or Gun to make your selection.
2. After your selection, the bot will randomly choose its option.
3. The outcome of the round will be displayed, and points will be awarded accordingly.
4. Continue playing until one player reaches 10 points and is declared the winner.

## How the Game Works

1. **Game Setup**:
   - The game starts with both the user and the bot (computer) having 0 points.
   - Icons representing Snake, Water, and Gun are displayed on the screen for the user to select from.

2. **User Interaction**:
   - The user clicks on one of the icons (Snake, Water, or Gun) to make their selection.

3. **Bot's Turn**:
   - After the user makes their selection, the bot randomly selects one of the three options (Snake, Water, or Gun) as well.

4. **Outcome Determination**:
   - The outcome of the round is determined based on the selections made by the user and the bot.
   - The rules are as follows:
     - Snake defeats Water.
     - Water defeats Gun.
     - Gun defeats Snake.
     - If both the user and the bot select the same option, it's a tie.

5. **Scoring**:
   - Points are awarded based on the outcome of each round:
     - If the user wins the round (as per the rules), they earn 1 point.
     - If the bot wins the round, the user earns 0 points.
     - In the case of a tie, no points are awarded to either the user or the bot.
   - The scores are updated after each round.

6. **Winner Declaration**:
   - The game continues until one player (either the user or the bot) reaches a total of 10 points.
   - Once a player reaches 10 points, they are declared the winner, and the game ends.
   - The winner is displayed on the screen.

7. **Restart Option**:
   - After the game ends, the user may be given the option to restart the game if they wish to play again.

8. **Displaying Results**:
   - Throughout the game, the results of each round (who selected what, the outcome, and the updated scores) are displayed on the screen for the user to see.
      game should handle any errors or unexpected inputs gracefully, providing appropriate feedback to the user if they make an invalid selection.

9. **Enjoyment**:
    - The main goal of the game is to provide entertainment and engagement to the user, allowing them to enjoy the classic Snake, Water, and Gun game in a digital format.


## Demo

You can access the live demo of the Snake, Water, and Gun game web application [here](https://snake-water-gun-and-game.netlify.app/).

## Installation

There is no installation required for this web application as it is hosted online. However, if you wish to run it locally, follow these steps:

1. Clone this repository to your local machine.
2. Open the `index.html` file in your web browser.
