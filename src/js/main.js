import './plugins/TweenMax.min.js'
import './plugins/CustomEase.min.js'

import { webAudio } from './tools/audio'
import { startAnimationFrame } from './animation-frame'
import { clickBodyPause } from './play-pause'

webAudio()
startAnimationFrame()
clickBodyPause()