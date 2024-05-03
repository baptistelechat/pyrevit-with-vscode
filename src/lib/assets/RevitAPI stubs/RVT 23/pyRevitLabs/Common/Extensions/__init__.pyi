from typing import Tuple, Set, Iterable, List


class CharExtensions:
    def RemapInternationalCharToAscii(c: Char) -> str: ...


class StringExtensions:
    def GetDisplayPath(sourceString: str) -> str: ...
    def GetHashShort(commitHash: str) -> str: ...
    def TripleDot(sourceString: str, maxLength: UInt32) -> str: ...
    def NullToNA(sourceString: str) -> str: ...
    def IsLocalPath(path: str) -> bool: ...
    def NormalizeAsPath(path: str) -> str: ...
    def ExtractVersion(version: str) -> Version: ...
    def ExtractGuid(inputString: str) -> Guid: ...
    def IsValidHttpUrl(sourceString: str) -> bool: ...
    def GetLines(sourceString: str) -> List: ...
    def Indent(sourceString: str, indentLevel: int) -> str: ...
    def UrlFriendly(text: str, maxLength: int) -> str: ...
    def GenerateMD5Hash(input: str) -> str: ...
    def ConvertToCommaSeparatedString(sourceValues: Iterable[str]) -> str: ...
    def ConvertFromCommaSeparatedString(commaSeparatedValue: str) -> List: ...
    def ToLiteral(input: str) -> str: ...
    def ToEscaped(input: str, WrapInQuotes: bool) -> str: ...
    def PrepareJSONForCSV(input: str) -> str: ...
    def SplitIntoChunks(input: str, chunkSize: int) -> Iterable[str]: ...
    def NormalizeNewLine(input: str) -> str: ...


class DateTimeExtensions:
    def NeatTime(sourceDate: DateTime) -> str: ...


class FileSizeExtension:
    @overload
    def CleanupSize(bytes: Single) -> str: ...
    @overload
    def CleanupSize(bytes: Int64) -> str: ...
    @overload
    def CleanupSize(bytes: int) -> str: ...


class InputExtensions:
    def LimitToRange(value: int, inclusiveMinimum: int, inclusiveMaximum: int) -> int: ...


class TOMLFormattingExtensions:
    def ConvertToTomlBoolString(sourceValue: bool) -> str: ...
    def ConvertToTomlIntString(sourceValue: int) -> str: ...
    def ConvertToTomlString(sourceValue: str) -> str: ...
    def ConvertToTomlListString(sourceValues: Iterable[str]) -> str: ...
    def ConvertToTomlDictString(sourceValues: IDictionary) -> str: ...
    def ConvertFromTomlListString(tomlListString: str) -> List: ...
    def ConvertFromTomlDictString(tomlDictString: str) -> Dictionary: ...