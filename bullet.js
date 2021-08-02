class Bullet{
    constructor(){
    
    }
    createBullet() {
        this.bullet = createSprite(300,100,20,20);
         this.bullet.velocityX = -6;
         this.bullet.scale = 0.3;
         this.bullet.lifetime = 10;
         this.bulletGroup.add(this.bullet);
         
       }
}