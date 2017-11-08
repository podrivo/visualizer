// plugins
import './plugins/TweenMax.min.js'
import './plugins/CustomEase.min.js'

// tools
import { webAudio } from './tools/audio'
import { raf } from './tools/raf'

//components
import { clickBodyPause } from './components/play-pause'

// functions
raf()
webAudio()
clickBodyPause()