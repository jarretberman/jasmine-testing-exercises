describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('it should not add a server if input is empty with submitServerInfo', function() {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0)
  })

  it('it should update the servertable with a new server on updateServerTable()', function(){

    submitServerInfo()
    updateServerTable()

    let newServer = document.querySelector("#serverTable tbody tr")
    expect(newServer.childElementCount).toEqual(2)
  })

  afterEach(function() {
    // teardown logic
    serverTbody.innerHTML = ""
    serverId = 0
    allServers = {}

  });
});
