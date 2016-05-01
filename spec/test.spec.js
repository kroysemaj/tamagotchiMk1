describe('Tamagotchi', function(){

  var shitbert;
  beforeEach(function() {
    jasmine.clock().install();
    shitbert = tamagotchi(); // Arrange / Given
  });

  afterEach(function(){
    jasmine.clock().uninstall();
  });


  it('should exist', function() {
    expect(shitbert).toBeDefined();
  });

  it('should have a hunger stat that defaults to 50', function() {
    expect(shitbert.stats.hunger).toBe(50);
  });

  it('should have a fullness stat that defaults to 50', function() {
    expect(shitbert.stats.fullness).toBe(50);
  });

  it('should have a happiness stat that defaults to 50', function() {
    expect(shitbert.stats.happiness).toBe(50);
  });

  describe('when feeding', function() {
    it('should decrease hungriness when fed', function() {
      shitbert.feed(); // Act / When
      expect(shitbert.stats.hunger).toBe(40) // Assert / Then
    });

    it('should increase fullness when fed', function() {
      shitbert.feed();
      expect(shitbert.stats.fullness).toBe(60)
    });
  });

  describe('when playing', function() {
    it('should increase happiness', function(){
      shitbert.play();
      expect(shitbert.stats.happiness).toBe(60)
    });
  });

  describe('when 💩-ing', function() {
    it('should decrease fullness', function() {
      shitbert.poo();
      expect(shitbert.stats.fullness).toBe(40);
    });
  });

  describe('changing needs over time', function() {
    it('should increase hungriness', function() {
      jasmine.clock().tick(60000); // passage of time (1 minute)
      expect(shitbert.stats.hunger).toBe(60);
    });

    it('should not increase hungriness prior to the time limit', function() {
      jasmine.clock().tick(59999);
      expect(shitbert.stats.hunger).toBe(50);
      expect(shitbert.stats.happiness).toBe(50);
    });

    it('should decrease happiness', function() {
      jasmine.clock().tick(60000);
      expect(shitbert.stats.happiness).toBe(40)
    });
  });

  describe('overall status', function() {
    it('should be content by default', function() {
      expect(shitbert.getMood()).toBe('Content');
    });

    it('should become hangry when hungriness is above 70', function() {
      jasmine.clock().tick(120000);
      expect(shitbert.stats.hunger).toBe(70);
      expect(shitbert.getMood()).toBe('😾')
    });

    it('should become dead when hungriness is 100', function() {
      jasmine.clock().tick(300000);
      expect(shitbert.stats.hunger).toBe(100);
      expect(shitbert.getMood()).toBe('💀')
    });
  });


});

