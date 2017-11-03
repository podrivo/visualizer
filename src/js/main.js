//plugins
import './plugins/TweenMax.min.js'
import './plugins/CustomEase.min.js'

// tools
import { canvas } from './tools/canvas'
import { webAudio } from './tools/web-audio'

// components
import { startAnimationFrame } from './components/animation-frame'
import { clickBodyPause } from './components/play-pause'

// start
canvas()
webAudio()
startAnimationFrame()
clickBodyPause()