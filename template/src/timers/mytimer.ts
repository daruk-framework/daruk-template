/**
 * @author {{author}}
 * @description user timer
 */

import { Daruk } from '@sina/daruk'

export default function (daruk:Daruk) {
  return {
      cronTime: '* * * * * *', //一秒一次
      onTick: function (this: any) {
        daruk.logger.info('mytimer onTick')
        this.stop(); //停止时会进入complete
      },
      onComplete: function () {
        daruk.logger.info('mytimer onComplete')
      }
  }
}