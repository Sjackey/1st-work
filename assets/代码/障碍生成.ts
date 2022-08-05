
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Prefab)
    za: cc.Prefab = null;
    start () {
        this.schedule(()=>{
            let z = cc.instantiate(this.za);
            z.setParent(cc.director.getScene());
            z.y=this.node.y;
            z.x=this.node.x;
        },Math.random()*3+1);
    }

    // update (dt) {}
}
