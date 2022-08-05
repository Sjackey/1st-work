import wjkz from "./玩家控制";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    start () {

    }

    update (dt) {
        this.node.x-=400*dt;
        if(this.node.x<-64)this.node.destroy();
    }
    onCollisionEnter(other){
        if(other.tag==3)
        {
            other.getComponent(wjkz).die();
        }
    }
}
