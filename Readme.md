# shadow shmup

The shadows are coming for you! Can you survive the onslaught? Move with WASD, auto-fires nearest enemy.

## TODO

- [ ] sound effects
    - [x] player shooting
    - [ ] player getting hit
    - [ ] player dying
    - [ ] enemy getting hit
    - [ ] enemy shooting
    - [ ] enemy dying
- [ ] special effects
    - [ ] player getting hit (flash screen -> change to something else)
- [ ] player upgrades (all upgrades use potions, and have one positive and one negative effect)
    - weapon fire rate
    - weapon shooting distance

    - bullet speed
    - bullet damage
    - bullet piercing

    - movement speed
    - player health
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
- [ ] enemy upgrades (some enemies are upgraded every wave)
    - damage
    - speed
    - health
    - shooting range
    - bullet speed
    - bullet count
    - fire rate
- [ ] stats
    - [ ] count kills, deaths, damage taken, damage dealt
    - [ ] show stats at end of game
- [ ] tutorial
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
- sound effects: [Kenney](https://kenney.nl/)