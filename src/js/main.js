// plugins
import './plugins/TweenMax.min.js'
import './plugins/CustomEase.min.js'

// tools
import { webAudio } from './tools/audio'

//components
import { raf } from './components/raf'
import { clickBodyPause } from './components/play-pause'

// functions
raf()
webAudio()
clickBodyPause()