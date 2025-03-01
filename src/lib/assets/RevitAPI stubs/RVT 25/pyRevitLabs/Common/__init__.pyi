from typing import Tuple, Set, Iterable, List


class CodeCompiler:
    def CompileCSharp(sourceFiles: Iterable[str], outputPath: str, references: Iterable[str], defines: Iterable[str], debug: bool) -> Tuple[bool, List]: ...
    def CompileCSharpToAssembly(sourceFiles: Iterable[str], assemblyName: str, references: Iterable[str], defines: Iterable[str], debug: bool) -> Tuple[Assembly, List]: ...
    def CompileVisualBasic(sourceFiles: Iterable[str], outputPath: str, references: Iterable[str], defines: Iterable[KeyValuePair], debug: bool) -> Tuple[bool, List]: ...
    def CompileVisualBasicToAssembly(sourceFiles: Iterable[str], assemblyName: str, references: Iterable[str], defines: Iterable[KeyValuePair], debug: bool) -> Tuple[Assembly, List]: ...


class CommonUtils:
    def VerifyFile(filePath: str) -> bool: ...
    def VerifyPath(path: str) -> bool: ...
    def VerifyPythonScript(path: str) -> bool: ...
    def DeleteDirectory(targetDir: str, verbose: bool) -> None: ...
    def CopyDirectory(sourceDir: str, destDir: str) -> None: ...
    def EnsurePath(path: str) -> None: ...
    def EnsureFile(filePath: str) -> None: ...
    def EnsureFileExtension(filepath: str, extension: str) -> str: ...
    def EnsureFileNameIsUnique(targetDir: str, fileName: str) -> bool: ...
    def GetFileSignature(filepath: str) -> str: ...
    def GetWebClient() -> WebClient: ...
    def GetHttpWebRequest(url: str) -> HttpWebRequest: ...
    def DownloadFile(url: str, destPath: str) -> str: ...
    def CheckInternetConnection() -> bool: ...
    def GetStructuredStorageStream(filePath: str, streamName: str) -> Set(Byte): ...
    def OpenUrl(url: str, logErrMsg: str) -> None: ...
    def VerifyUrl(url: str) -> bool: ...
    def OpenInExplorer(resourcePath: str) -> None: ...
    def NewShortUUID() -> str: ...
    def GetISOTimeStamp(dtimeValue: DateTime) -> str: ...
    def GetISOTimeStampNow() -> str: ...
    def GetISOTimeStampLocalNow() -> str: ...
    def GetUTF8NoBOMEncoding() -> Encoding: ...
    def FindBytes(src: Set(Byte), find: Set(Byte)) -> int: ...
    def ReplaceBytes(src: Set(Byte), search: Set(Byte), repl: Set(Byte)) -> Set(Byte): ...
    def GenerateRandomName(len: int) -> str: ...
    def GetProcessFileName() -> str: ...
    def GetProcessPath() -> str: ...
    def GetAssemblyPath() -> str: ...


class PyRevitLabsConsts:
    def __init__(self): ...
    @property
    def PyRevitPath() -> str: ...
    @property
    def PyRevitProgramDataPath() -> str: ...
    @property
    def CacheDirectory() -> str: ...
    @property
    def LogsDirectory() -> str: ...


class ErrorCodes:
    NoErrors = 0
    DefaultedToAllUsersConfigFile = 1
    MoreThanOneItemMatched = 2


class Errors:
    @property
    def Instance() -> Errors: ...
    @property
    def LatestError() -> ErrorCodes: ...
    @LatestError.setter
    def LatestError(value: ErrorCodes) -> None: ...


class PyRevitException:
    @overload
    def __init__(self): ...
    @overload
    def __init__(self, message: str): ...
    @overload
    def __init__(self, message: str, innerException: Exception): ...


class pyRevitResourceMissingException(PyRevitException):
    @overload
    def __init__(self): ...
    @overload
    def __init__(self, resoucePath: str): ...
    @property
    def Path(self) -> str: ...
    @property
    def Message(self) -> str: ...


class pyRevitNoInternetConnectionException(PyRevitException):
    def __init__(self): ...
    @property
    def Message(self) -> str: ...


class pyRevitInvalidURLException(PyRevitException):
    def __init__(self, url: str): ...
    @property
    def URL(self) -> str: ...
    @property
    def Message(self) -> str: ...


class GithubReleaseAssetType:
    Unknown = 0
    Archive = 1
    Installer = 2


class GithubReleaseInfo:
    def __init__(self): ...
    def ToString(self) -> str: ...
    @property
    def name(self) -> str: ...
    @name.setter
    def name(self, value: str) -> None: ...
    @property
    def tag_name(self) -> str: ...
    @tag_name.setter
    def tag_name(self, value: str) -> None: ...
    @property
    def html_url(self) -> str: ...
    @html_url.setter
    def html_url(self, value: str) -> None: ...
    @property
    def prerelease(self) -> bool: ...
    @prerelease.setter
    def prerelease(self, value: bool) -> None: ...
    @property
    def tarball_url(self) -> str: ...
    @tarball_url.setter
    def tarball_url(self, value: str) -> None: ...
    @property
    def zipball_url(self) -> str: ...
    @zipball_url.setter
    def zipball_url(self, value: str) -> None: ...
    @property
    def body(self) -> str: ...
    @body.setter
    def body(self, value: str) -> None: ...
    @property
    def assets(self) -> JArray: ...
    @assets.setter
    def assets(self, value: JArray) -> None: ...
    @property
    def created_at(self) -> str: ...
    @created_at.setter
    def created_at(self, value: str) -> None: ...
    @property
    def published_at(self) -> str: ...
    @published_at.setter
    def published_at(self, value: str) -> None: ...
    @property
    def Version(self) -> Version: ...
    @property
    def Name(self) -> str: ...
    @property
    def Url(self) -> str: ...
    @property
    def Tag(self) -> str: ...
    @property
    def ReleaseNotes(self) -> str: ...
    @property
    def PreRelease(self) -> bool: ...
    @property
    def CreatedTimeStamp(self) -> str: ...
    @property
    def PublishedTimeStamp(self) -> str: ...
    @property
    def InstallerURL(self) -> str: ...


class GithubAPI:
    def __init__(self): ...
    @property
    def AuthToken() -> str: ...
    def GetReleasesFromAPI(endpoint: str) -> Tuple[Iterable[T], str]: ...
    def GetReleases(repoId: str) -> List: ...
    def GetReleaseEndPoint(repoId: str) -> str: ...
    def GetBranchArchiveUrl(repoId: str, branchName: str) -> str: ...
    def GetTagArchiveUrl(repoId: str, tagName: str) -> str: ...
    def GetZipPackageInternalBranchPath(repoName: str, branchName: str) -> str: ...
    def GetRawUrl(repoId: str, branchName: str, filePath: str) -> str: ...


class pyRevitInvalidGitCloneException(PyRevitException):
    @overload
    def __init__(self): ...
    @overload
    def __init__(self, invalidClonePath: str): ...
    @property
    def Path(self) -> str: ...
    @Path.setter
    def Path(self, value: str) -> None: ...
    @property
    def Message(self) -> str: ...


class UpdateStatus:
    Error = 0
    Conflicts = 1
    NonFastForward = 2
    FastForward = 3
    UpToDate = 4


class GitInstallerCredentials:
    def IsValid(self) -> bool: ...
    def GetCredentials(self) -> Credentials: ...


class GitInstallerUsernamePasswordCredentials(GitInstallerCredentials):
    def __init__(self): ...
    @property
    def Username(self) -> str: ...
    @Username.setter
    def Username(self, value: str) -> None: ...
    @property
    def Password(self) -> str: ...
    @Password.setter
    def Password(self, value: str) -> None: ...
    def GetCredentials(self) -> Credentials: ...
    def IsValid(self) -> bool: ...


class GitInstallerAccessTokenCredentials(GitInstallerCredentials):
    def __init__(self): ...
    @property
    def Username(self) -> str: ...
    @Username.setter
    def Username(self, value: str) -> None: ...
    @property
    def AccessToken(self) -> str: ...
    @AccessToken.setter
    def AccessToken(self, value: str) -> None: ...
    def GetCredentials(self) -> Credentials: ...
    def IsValid(self) -> bool: ...


class GitInstaller:
    def Clone(repoPath: str, branchName: str, destPath: str, creds: GitInstallerCredentials, checkout: bool) -> Repository: ...
    def CheckoutBranch(repoPath: str, branchName: str) -> None: ...
    def ForcedUpdate(repoPath: str, creds: GitInstallerCredentials) -> UpdateStatus: ...
    def RebaseToCommit(repoPath: str, commitHash: str) -> None: ...
    def RebaseToTag(repoPath: str, tagName: str) -> None: ...
    def SetRemoteUrl(repoPath: str, remoteName: str, remoteUrl: str) -> None: ...
    def IsValidRepo(repoPath: str) -> bool: ...
    def GetCheckedoutBranch(repoPath: str) -> str: ...
    def GetHeadCommit(repoPath: str) -> str: ...
    def GetRemoteUrl(repoPath: str, remoteName: str) -> str: ...




class OSVersionInfo:
    @property
    def FullName(self) -> str: ...
    @property
    def Name(self) -> str: ...
    @Name.setter
    def Name(self, value: str) -> None: ...
    @property
    def Minor(self) -> int: ...
    @Minor.setter
    def Minor(self, value: int) -> None: ...
    @property
    def Major(self) -> int: ...
    @Major.setter
    def Major(self, value: int) -> None: ...
    @property
    def Build(self) -> int: ...
    @Build.setter
    def Build(self, value: int) -> None: ...
    def GetOSVersionInfo() -> OSVersionInfo: ...


class RECT:


class KnownFolderFlags:
    SimpleIDList = 256
    NotParentRelative = 512
    DefaultPath = 1024
    Init = 2048
    NoAlias = 4096
    DontUnexpand = 8192
    DontVerify = 16384
    Create = 32768
    NoAppcontainerRedirection = 65536
    AliasOnly = 2147483648


class GDI32:
    def CreateCompatibleDC(hdc: IntPtr) -> IntPtr: ...
    def CreateCompatibleBitmap(hdc: IntPtr, nWidth: int, nHeight: int) -> IntPtr: ...
    def SelectObject(hdc: IntPtr, hgdiobj: IntPtr) -> IntPtr: ...
    def BitBlt(hdcDest: IntPtr, nXDest: int, nYDest: int, nWidth: int, nHeight: int, hdcSrc: IntPtr, nXSrc: int, nYSrc: int, dwRop: int) -> bool: ...
    def DeleteDC(hdc: IntPtr) -> bool: ...
    def DeleteObject(hObject: IntPtr) -> bool: ...


class User32:
    def GetDesktopWindow() -> IntPtr: ...
    def GetTopWindow(hWnd: IntPtr) -> IntPtr: ...
    def GetWindow(hWnd: IntPtr, wCmd: UInt32) -> IntPtr: ...
    def GetWindowDC(hWnd: IntPtr) -> IntPtr: ...
    @overload
    def GetWindowRect(hWnd: IntPtr) -> Tuple[IntPtr, RECT]: ...
    def ReleaseDC(hWnd: IntPtr, hDC: IntPtr) -> IntPtr: ...
    def SetWindowText(hWnd: IntPtr, lpString: str) -> int: ...
    def FindWindowEx(hwndParent: IntPtr, hwndChildAfter: IntPtr, lpszClass: str, lpszWindow: str) -> IntPtr: ...
    def EnumThreadWindows(dwThreadId: int, lpfn: EnumThreadDelegate, lParam: IntPtr) -> bool: ...
    def EnumerateProcessWindowHandles(processId: int) -> Iterable[IntPtr]: ...
    @overload
    def GetWindowRect(windowHandle: IntPtr) -> RECT: ...


class Shell32:
    def SHGetKnownFolderPath(rfid: Guid, dwFlags: UInt32, hToken: IntPtr) -> Tuple[int, IntPtr]: ...


class KnownFolder:
    Contacts = 0
    Desktop = 1
    Documents = 2
    Downloads = 3
    Favorites = 4
    Links = 5
    Music = 6
    Pictures = 7
    SavedGames = 8
    SavedSearches = 9
    Videos = 10


class UserEnv:
    def GetWindowsVersion() -> str: ...
    def GetInstalledDotNetVersion() -> Version: ...
    def GetInstalledDotnetTargetPacks() -> List: ...
    def GetInstalledDotnetCoreTargetPacks() -> List: ...
    def GetExecutingUserName() -> str: ...
    def GetLoggedInUserName() -> str: ...
    def IsRunAsElevated() -> bool: ...
    def IsRunAsAdmin() -> bool: ...
    @property
    def UserHome() -> str: ...
    @property
    def UserTemp() -> str: ...
    @overload
    def GetPath(knownFolder: KnownFolder) -> str: ...
    @overload
    def GetPath(knownFolder: KnownFolder, defaultUser: bool) -> str: ...


class UserSecurity:
    def __init__(self): ...
    @overload
    def HasAccess(self, directory: DirectoryInfo, right: FileSystemRights) -> bool: ...
    @overload
    def HasAccess(self, file: FileInfo, right: FileSystemRights) -> bool: ...


class EnumThreadDelegate:
    def __init__(self, object: Object, method: IntPtr): ...
    def Invoke(self, hWnd: IntPtr, lParam: IntPtr) -> bool: ...
    def BeginInvoke(self, hWnd: IntPtr, lParam: IntPtr, callback: AsyncCallback, object: Object) -> IAsyncResult: ...
    def EndInvoke(self, result: IAsyncResult) -> bool: ...
