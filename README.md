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
# reload child process
sudo systemctl reload nodejs-systemd.service
```




