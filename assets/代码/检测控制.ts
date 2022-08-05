import wjkz from "./玩家控制";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    start () {

    }
    onCollisionEnter(other)
    {
        if(other.tag==3)
        {
            other.getComponent(wjkz).b=false;
        }
    }
    // update (dt) {}
}
