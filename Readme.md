# shadow shmup

Browsergame, fun and casual top-down, roguelike shoot 'em up with shadow elements and colorful neon effects, developed for the [2024 piratejam](https://itch.io/jam/pirate), with the theme "shadows and alchemy".

See the submission on [itch.io](https://flo-bit.itch.io/shadow-shmup).

WIP. See the current development version on [GitHub Pages](https://flo-bit.github.io/shadow-shmup/).

## How to play

- Move with WASD or arrow keys
- Player auto-shoots nearest enemy

For co-op mode:

- Player 1: WASD to move
- Player 2: arrow keys to move

## Techstack

PixiJS, Typescript, Vite, TailwindCSS, Rapier


## Development

1. Clone the repository

```bash
git clone https://github.com/flo-bit/shadow-shmup.git
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open the game in your browser at [http://localhost:5173](http://localhost:5173)


## credits:

- music: [Nicholas Palmer](https://soundcloud.com/nicholas-palmer-4)
- code and concept: [flo-bit](https://github.com/flo-bit) and [unbedenklich](https://github.com/unbedenklich)

## License

CC BY-NC 4.0

## TODO

- [ ] more enemies
    - [ ] laser dude
- [ ] stats
    - [ ] count kills, deaths, damage taken, damage dealt
    - [ ] show stats at end of game
- [ ] tutorial
- [ ] move wave counter to top right corner
- [ ] pentagon enemies: make bullets pentagon shaped and slowly rotating (and some kind of warning?)
- [ ] different players
    - [ ] different weapons
    - [ ] different shapes
    - [ ] different stats
- [ ] sound effects (change to own recorded sounds)
    - [ ] player shooting
    - [ ] player getting hit
    - [ ] player dying
    - [ ] enemy getting hit
    - [ ] enemy shooting
    - [ ] enemy dying
- [ ] special effects
    - [ ] player getting hit (red vignette)
- [x] player upgrades
    - [x] weapon fire rate
    - [x] weapon shooting distance

    - [x] bullet speed
    - [x] bullet damage
    - [x] bullet piercing

    - [x] movement speed
    - [x] player health
    - items stay longer
- [ ] powerups
    - [ ] randomly spawn (with some chance in each cell)
    - [ ] can be used for a limited time
    - [ ] different powerups:
        - [ ] invincibility
        - [ ] 2x, 4x damage
        - [ ] 2x, 4x fire rate
        - [ ] 2x, 4x bullet count
        - [ ] 2x shooting distance
        - [ ] shoot through enemies
        - [ ] 50%, 100% health refill
        - [ ] items stay as long as powerup is active
        - [ ] item magnet
        - [ ] get all items
- [x] enemy upgrades (some enemies are upgraded every wave)
    - damage
    - speed
    - health
    - shooting range
    - bullet speed
    - bullet count
    - fire rate
- weapons
    - recoil on player
    - [x] impulse on bullet impact (done for enemies)
- [x] indicator for sphere enemy shooting (+pause before shooting)
- [x] move items towards player
- [x] enemies attack
    - [x] shoot (pentagon)
    - [x] pulse (sphere)
    - [x] ram/explode (triangle)
- [x] die
- [x] change player rigidbody to dynamic
- [x] different enemies
    - [x] different shapes, attacks
- [x] waves
- [x] eyes blinking
- [x] obstacles
- [x] enemies drop stuff, player can pick it up
- [x] music
- [x] menu: solo, co-op, credits
- [x] credits
- [x] items ("potions")
    - [x] disappear after a while
    - [x] different potions (depending on monster killed?)
- [x] lights
    - [x] make own light class and add to player
    - [x] enemies should be lit by light distance instead of player distance
- [x] scale canvas so that it always shows a 1000x1000 area or something like that

## Bugs

- [ ] sometimes stuck in wall (moving when low fps or spawn in wall)
- [ ] weapons still active after player death (in coop)
- [ ] bloom sometimes doesn't work (line enemy?)