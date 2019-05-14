# Git

## Git安装

* 地址 https://git-scm.com/downloads
* windows 平台 右击 Git Bash Here



## Git 配置

* 配置姓名和邮箱

```
git config --global user.name '***'
git config --global user.email '***@qq.com'
```

--global 全局配置



## 创建仓库 | 版本库

* 创建文件夹 ——查看当前目录——查看目录路径——进入新文件夹

```
mkdir worksapce 
ls 
pwd
cd workspace
```

* 初始化 git 仓库，将文件夹——变为git仓库——新增.git隐藏文件

```
git init
ls
```

* ls 并没有任何文件——添加-ah

```
ls -ah
./  ../  .git/
```



## 具体命令使用

### 1 创建git.txt文件

* 这里使用终端，你也可以手动——写入`hello world`

````
echo hello world >> git.txt

ls 
git.txt
````

```
ls -l
total 1
-rw-r--r-- 1 lion 197121 12 5月   8 17:43 git.txt
```



### 2 提交暂存区

```
git add git.txt
git add.
```

 `git add *** 提交某个文件 git add 1.txt 2.txt 3.txt  git add .  提交所有文件`



### 3 添加描述，提交到本地仓库

```
git commit -m '提交git.txt 文件'

[master (root-commit) 61e8b42] 提交git.txt 文件
 1 file changed, 1 insertion(+)
 create mode 100644 git.txt
```

`git commit --amend 追加提交，每次commit都会生成新的id，避免重复`



### 5 查看当前仓库状态

```
git status

On branch master
nothing to commit, working tree clean
```

`master 分支很干净，没有可提交的东西了`



### 6 修改 git.txt

```
git satus

On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   git.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

`此时可以看到某个文件被修改，可以使用git add 添加文件， `

`git checkout --<file> 撤销某个文件的修改`

`git checckout *   撤销所有的修改`



### 7 撤销修改

```
git checkout -- git.txt
git checkout * 
git status
```

`查看 git.txt 修改的文件已经没有了`

**撤销的理解**

* 只能撤销工作区的修改，一旦`git add .` 提交到暂存区的内容是不会撤销的，只能回退
* 修改完文件，没有 `git add .` 可以撤销
* 修改完文件，`git add .` 在修改文件 ，可以撤销再次修改的内容，但 `git add .` 的文件不能撤销
* 总之，就是让这个文件回到最近一次`git commit`或`git add`时的状态。





### 8 查看不同

* 再次修改 git.txt, 查看修改的差异，不同

* 假如我们修改了某个文件，时间一长忘了哪些地方是新修改的

```
git diff

diff --git a/git.txt b/git.txt
index 3b18e51..b6fc4c6 100644
--- a/git.txt
+++ b/git.txt
@@ -1 +1 @@
-hello world
+hello
\ No newline at end of file
```

`- 号代表原有， + 号代表现在修改后的， `

`git diff git.txt  具体看某个文件`

`git diff HEAD -- git.txt` 具体和某个版本某个文件对比



### 9 再次提交

```
git add .
git commit -m '修改下git.txt'
git status
On branch master
nothing to commit, working tree clean
git diff
```



### 10 查看提交的记录

```
git log

commit 346305170180b9250445b62868ffa9d7c69d5dee (HEAD -> master)
Author: lion <1061550203@qq.com>
Date:   Thu May 9 10:02:40 2019 +0800

    修改一下

commit 6264b4aaba84c09fea5945a4c7a12750ad16c838
Author: lion <1061550203@qq.com>
Date:   Wed May 8 19:23:35 2019 +0800

    修改下git.txt

commit 61e8b42956b7cc7a203d89a3c0cadf90d833d1e9
Author: lion <1061550203@qq.com>
Date:   Wed May 8 18:06:18 2019 +0800

    提交git.txt 文件


```

`git log --pretty=oneline` 简化日志



### 11 版本回退

* 当前提交的代码不想要了，回退到某个版本

```
git reset --hard HEAD^
HEAD is now at 6264b4a 修改下git.txt
```

* ` HEAD` 当前版本
* `HEAD^`上一个版本
* `HEAD^^`上上个版本
* `git rest --hard ****` 指定commit id具体回退到哪里



### 12 读取回退后的内容

```
cat git.txt
hello
```

* `cat git.txt` 具体文件
* `cat *` 查看说有回退的内容
* 这里要说明一下，凡是出现指定某个文件的命令，必定存在多个和所有的命令
* 就像正则匹配， * ？+



**问题**

* 是否还能回到版本回退之前的状态

```
git log

// 修改一下 的日志没有了

Author: lion <1061550203@qq.com>
Date:   Wed May 8 19:23:35 2019 +0800

    修改下git.txt

commit 61e8b42956b7cc7a203d89a3c0cadf90d833d1e9
Author: lion <1061550203@qq.com>
Date:   Wed May 8 18:06:18 2019 +0800

    提交git.txt 文件
```

* 显然日志由三条变为两条
* 只要git没有关闭，把原有的修改一下的commit id 拿过来，继续回退

```
git reset --hard 3463051701
HEAD is now at 3463051 修改一下

$ cat *
hello world

git log
commit 346305170180b9250445b62868ffa9d7c69d5dee (HEAD -> master)
Author: lion <1061550203@qq.com>
Date:   Thu May 9 10:02:40 2019 +0800

    修改一下

commit 6264b4aaba84c09fea5945a4c7a12750ad16c838
Author: lion <1061550203@qq.com>
Date:   Wed May 8 19:23:35 2019 +0800

    修改下git.txt

commit 61e8b42956b7cc7a203d89a3c0cadf90d833d1e9
Author: lion <1061550203@qq.com>
Date:   Wed May 8 18:06:18 2019 +0800

    提交git.txt 文件
```

* 这时 跟回退前一模一样

**问题**

* 如果git 关掉了，怎么找id



### 13 查看每次提交历史记录

```
git reflog

3463051 (HEAD -> master) HEAD@{0}: reset: moving to 3463051701
6264b4a HEAD@{1}: reset: moving to HEAD^
3463051 (HEAD -> master) HEAD@{2}: commit: 修改一下
6264b4a HEAD@{3}: reset: moving to HEAD
6264b4a HEAD@{4}: commit: 修改下git.txt
61e8b42 HEAD@{5}: commit (initial): 提交git.txt 文件
```

**每次提交的记录是不是写的非常清楚**

其实处理这种方法可以查看提交记录，还有好多方法，

`.git` 版本库里记录着所有的操作



### 14 删除文件

* 一般很少使用命令删除文件，都是手动删除

**命令一**

```
rm git.txt
ls
// 为空
git status

On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   git.txt

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        deleted:    git.txt

```

`rm git.txt` 只是把文件删除没有把暂存区的文件删除



**命令二**

```
git checkout * // 撤销删除的文件
git rm git.txt
```

`git rm git.txt` 删除的是版本库里的文件，这个文件一定要版本库里，不然没有办法删

不能撤销，只能版本回退，

```
$ git rm abc.txt
rm 'abc.txt'

$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        deleted:    abc.txt

 ls // 没有任何文件
 
git checkout *
error: pathspec '*' did not match any file(s) known to git
// 并不能撤销

git reset --hard HEAD
HEAD is now at 0cd1d3b abc

ls
abc.txt
```

**git rm 误删，还原**

```
git rm git.txt
git reset HEAD git.txt
git checkout -- git.txt // 直接恢复误删除文件
ls
git.txt
```

其实还是回退某个文件



## 工作区和暂存区

### 工作区

* 当前文件夹
* 有一个隐藏的文件`.git` , git 的版本库，每次git操作都在这里面有记录

![](C:\workspace\Store\Doc\static\images\bg-stage.jpg)



### 暂存区

* 版本库有很多东西，最为重要的是暂存区：stage（index）

* Git 自动创建一个分支master，指向master的一个指针HEAD

* `git add .` 把文件添加到暂存区
* `git commit -m ''` 把暂存区提交到当前本地分支
* `git push origin master` 把本地分支提交到远程仓库
  *  暂存区 —— 本地分支 —— 远程仓库



## 远程仓库

### 添加到远程仓库

* 暂存区 —— 本地分支 `已完成`
* 本地分支——远程仓库 `continue`
* 远程仓库使用github



### 注册GitHub

* 创建一个git仓库 
* 点击  `create a new repo`

![](C:\workspace\Store\Doc\static\images\create-git.png)



### 配置SSH Key

* 打开GIT Bash
* 添加邮箱

```
ssh-keygen -t rsa -C '***'
```

如果一切顺利的话，可以在用户主目录里找到`.ssh`目录，里面有`id_rsa`和`id_rsa.pub`两个文件，这两个就是SSH Key的秘钥对，`id_rsa`是私钥，不能泄露出去，`id_rsa.pub`是公钥，可以放心地告诉任何人



### 打开GitHub

* 打开`Account settings`
* SSH Keys 页面
* Add SSH Key  title 任意， key = id_rsa.pub

![](C:\workspace\Store\Doc\static\images\sshkey.png)

为什么GitHub需要SSH Key呢？因为GitHub需要识别出你推送的提交确实是你推送的，而不是别人冒充的，而Git支持SSH协议，所以，GitHub只要知道了你的公钥，就可以确认只有你自己才能推送。



### 本地仓库和远程仓库关联

* 修改本地仓库的源

```
git remote -v
git remote add origin *****.git
git push -u origin master
```

`git remote -v ` 查看所有的远程仓库地址

`git remote add origin  ***.git` 修改本地仓库的远程地址，个人仓库

`git remote add upstream ***.git` 默认添加上游仓库地址，主仓库

`git remote remove origin`  删除远程仓库地址

由于远程库是空的，我们第一次推送`master`分支时，加上了`-u`参数，Git不但会把本地的`master`分支内容推送的远程新的`master`分支，还会把本地的`master`分支和远程的`master`分支关联起来，在以后的推送或者拉取时就可以简化命令。

```
git push origin master
```

**扩展**

* `git push origin master`  推送本地分支与之关联远程分支，有master,则推送，否，新建，并推送
* `git push origin` 分支与远程分支存在追踪关系, 将当前分支推送到origin主机的对应分支
* `git push` 果当前分支只有一个远程分支，那么主机名都可以省略，形如 git push，可以使用git branch -r ，查看远程的分支名

**git push**

* `git push -u origin master` ` -u  `参数指定一个默认主机，这样后面就可以不加任何参数使用`git push`

  * 不带任何参数的`git push`，默认只推送当前分支，这叫做`simple`方式，还有一种`matching`方式，会推送所有有对应的远程分支的本地分支，` Git 2.0`之前默认使用matching，现在改为`simpl`e方式

  * 如果想更改设置，可以使用`git config`命令。`git config --global push.default matching` OR `git config --global push.default simple`；可以使用`git config -l` （L的小写） 查看配置

  * ```
    $ git push origin master -u
    Enumerating objects: 5, done.
    Counting objects: 100% (5/5), done.
    Delta compression using up to 4 threads
    Compressing objects: 100% (2/2), done.
    Writing objects: 100% (3/3), 249 bytes | 124.00 KiB/s, done.
    Total 3 (delta 0), reused 0 (delta 0)
    To https://github.com/DUMUUZEEJIA/git.git
       dcdfd5e..b8efb5c  master -> master
       
    Branch 'master' set up to track remote branch 'master' from 'origin'.
    
    ```

    

* `git push --all origin` 将本地的所有分支都推送到远程主机

* `git push --force origin git push` 的时候需要本地先git pull更新到跟服务器版本一致，**如果本地版本库比远程服务器上的低**，那么一般会提示你git pull更新，如果一定要提交，那么可以使用这个命令。

* `git push origin --tags //git push` 的时候不会推送分支，如果一定要推送标签的话那么可以使用这个命令

* `git push origin ：refs/for/master ` == `git push origin --delete master` 如果省略本地分支名，则表示删除指定的远程分支，因为这等同于推送一个空的本地分支到远程分支

       ``` 
$ git push origin -d dev
To https://github.com/DUMUUZEEJIA/git.git
 - [deleted]         dev
       ```

**资料**

<https://www.cnblogs.com/qianqiannian/p/6008140.html>



### 拉取远程仓库

* 克隆远程仓库

```
git clone '********.git'

Cloning into 'git'...
remote: Enumerating objects: 23, done.
remote: Counting objects: 100% (23/23), done.
remote: Compressing objects: 100% (8/8), done.
remote: Total 23 (delta 0), reused 23 (delta 0), pack-reused 0
Unpacking objects: 100% (23/23), done.
```

`git clone` 克隆地址支持多种协议

* `https://****` 速度慢，需要配置密码，不然每次操作输入密码

* `git://`SSH

* 等多种协议

  

## 分支

* Git的分支是与众不同的，无论创建、切换和删除分支，Git在1秒钟之内就能完成！无论你的版本库是1个文件还是1万个文件。
* 相比svn的分支好多了。



