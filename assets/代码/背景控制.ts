
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    start () {

    }

    update (dt) {
        for(let n of this.node.children)
        {
            n.x-=400*dt;
            if(n.x<-1151)
               n.x+=1150*2;
        }
    }
}
