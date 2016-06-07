# nodejs-recluster-systemd

## Installation

```bash
git clone https://github.com/menems/nodejs-recluster-systemd.git
npm install
vagrant up
```

## Usage

```bash
curl http://localhost:3000
```

```bash
vagrant ssh
sudo systemctl status nodejs-systemd.service
sudo systemctl kill -s SIGUSR2 --kill-who=main nodejs-systemd.service
```




