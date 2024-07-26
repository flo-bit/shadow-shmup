# shadow shmup

The shadows are coming for you! Can you survive the onslaught? Move with WASD, auto-fires nearest enemy.

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


## TODO

# shadow shmup

- count kills, deaths, damage taken, damage dealt
- enemies attack
    - [x] shoot (pentagon)
    - pulse
    - [x] ram/explode (triangle)
- [x] die
- weapons
    - recoil on player
    - [x] impulse on bullet impact (done for enemies)
    - different weapons (different shooting mechanics, colors)
    - show weapon
- [x] change player rigidbody to dynamic
- different enemies
    - [x] different shapes, attacks
- waves
- [x] eyes blinking
- [x] obstacles
- [x] enemies drop stuff, player can pick it up
- [x] music
- [ ] sound effects
    - [ ] player shooting
    - [ ] player getting hit
    - [ ] enemy getting hit
    - [ ] enemy shooting
    - [ ] enemy dying
- [ ] special effects
    - [x] player getting hit (flash screen)
- [x] menu: solo, co-op, credits
- [x] credits
- [x] items ("potions")
    - [x] disappear after a while
    - [x] different potions (depending on monster killed?)
- [ ] player upgrades (all upgrades use potions, and have one positive and one negative effect)
    - movement speed
    - fire rate
    - bullet speed
    - bullet damage
    - player health
    - viewing distance
    - shooting distance
    - player size
    - bullet count?
    - bullet spread?
- lights
    - make own light class and add to player
    - enemies should be lit by light distance instead of player distance
- [ ] powerups
    - [ ] randomly spawn
    - [ ] disappear after a while
    - [ ] can be used for a limited time
    - [ ] different powerups:
        - [ ] invincibility
        - [ ] 2x, 4x damage
        - [ ] 2x, 4x fire rate
        - [ ] 2x, 4x bullet count
        - [ ] 2x shooting distance
        - [ ] shoot through enemies
        - [ ] 50%, 100% health refill
- [x] scale canvas so that it always shows a 1000x1000 area or something like that
- [ ] enemy upgrades (some enemies are upgraded every wave)
    - damage
    - speed
    - health
    - shooting range
    - bullet speed
    - bullet count
    - fire rate
- [ ] indicator for sphere enemy shooting (+pause before shooting)


## credits:

- music: [Nicholas Palmer](https://soundcloud.com/nicholas-palmer-4)
- sound effects: [Kenney](https://kenney.nl/)