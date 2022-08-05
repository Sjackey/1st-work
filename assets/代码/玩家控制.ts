
const {ccclass, property} = cc._decorator;

@ccclass
export default class wjkz extends cc.Component {
    b:boolean = false;
    onLoad(){
        cc.director.getPhysicsManager().enabled=true;
        cc.director.getCollisionManager().enabled=true;
    }
    start () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,(event)=>
        {
           if(event.keyCode == cc.macro.KEY.w&&this.b)
           {
                this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0,2200);
           }
        })
    }
    die(){
        this.node.destroy();
    }
}
