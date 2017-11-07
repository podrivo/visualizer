// plugins
import './plugins/TweenMax.min.js'
import './plugins/CustomEase.min.js'

// tools
import { webAudio } from './tools/audio'

//components
import { startAnimationFrame } from './components/animation-frame'
import { clickBodyPause } from './components/play-pause'

// functions
webAudio()
startAnimationFrame()
clickBodyPause()